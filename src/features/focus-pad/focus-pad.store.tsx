// focus-pad.store.tsx
// Shared application shell store for Focus Pad.
//
// Owns: navigation state (active surface / panel / selected record), persistence
// bootstrapping via the focus-pad.repo adapter, item count, last error, and
// the stable `AppBridge` contract consumed by screen-owner stories
// (US-002, US-003) and the test bridge.
//
// Pattern: a single React Context backed by useReducer. Components inside
// <FocusPadProvider> read state via `useFocusPad()` and full notes via
// `useFocusPadStore()`. Writes go through stable action callbacks.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react';

import {
  focusPadRepo,
  type FocusPadRepoLoadResult,
} from './focus-pad.repo';
import type {
  AppBridge,
  AppBridgeActions,
  ErrorKind,
  FocusPadAction,
  FocusPadRecord,
  FocusPadSnapshot,
  FocusPadState,
  PanelId,
  StorageStatus,
  SurfaceId,
} from './focus-pad.types';

function makeSnapshot(state: FocusPadState): FocusPadSnapshot {
  return {
    counts: { notes: state.notes.length },
    activeSurface: state.activeSurface,
    selectedRecordId: state.selectedRecordId,
    activePanel: state.activePanel,
    storageStatus: state.storageStatus,
    lastError: state.lastError,
  };
}

function emptySnapshot(): FocusPadSnapshot {
  return {
    counts: { notes: 0 },
    activeSurface: 'record-editor',
    selectedRecordId: null,
    activePanel: 'notes',
    storageStatus: 'idle',
    lastError: null,
  };
}

const EMPTY_STATE: FocusPadState = {
  ...emptySnapshot(),
  notes: [],
  draftBody: '',
};

function reducer(state: FocusPadState, action: FocusPadAction): FocusPadState {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        notes: action.payload.notes,
        counts: { notes: action.payload.notes.length },
        storageStatus: action.payload.storageStatus,
        lastError: action.payload.lastError,
      };
    case 'SET_ACTIVE_SURFACE':
      return { ...state, activeSurface: action.surface };
    case 'SELECT_RECORD':
      return { ...state, selectedRecordId: action.recordId };
    case 'SET_ACTIVE_PANEL':
      return { ...state, activePanel: action.panel };
    case 'SET_DRAFT_BODY':
      return { ...state, draftBody: action.body };
    case 'SAVE_DRAFT_NOTE': {
      const trimmed = state.draftBody.trim();
      if (trimmed.length === 0) return state;
      const now = Date.now();
      let nextNotes: FocusPadRecord[];
      if (state.selectedRecordId) {
        nextNotes = state.notes.map((note) =>
          note.id === state.selectedRecordId
            ? { ...note, body: trimmed, updatedAt: now }
            : note,
        );
      } else {
        nextNotes = [
          ...state.notes,
          {
            id: createRecordId(),
            body: trimmed,
            createdAt: now,
            updatedAt: now,
          },
        ];
      }
      return {
        ...state,
        notes: nextNotes,
        counts: { notes: nextNotes.length },
        draftBody: '',
      };
    }
    case 'SET_STORAGE_STATUS':
      return { ...state, storageStatus: action.storageStatus };
    case 'SET_LAST_ERROR':
      return { ...state, lastError: action.error };
    case 'CLEAR_ERROR':
      return { ...state, lastError: null };
    default:
      return state;
  }
}

function createRecordId(): string {
  if (
    typeof globalThis !== 'undefined' &&
    typeof globalThis.crypto !== 'undefined' &&
    typeof globalThis.crypto.randomUUID === 'function'
  ) {
    return globalThis.crypto.randomUUID();
  }
  return `note-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function errorFromLoadFailure(result: Extract<FocusPadRepoLoadResult, { ok: false }>): {
  kind: ErrorKind;
  message: string;
} {
  const kind: ErrorKind =
    result.reason === 'corrupted' ? 'corrupted-payload' : 'storage-unavailable';
  return { kind, message: result.message };
}

export interface FocusPadContextValue {
  state: FocusPadState;
  actions: AppBridgeActions;
  /** Returns the latest bridge snapshot. Stable reference; safe to call repeatedly. */
  snapshot: () => FocusPadSnapshot;
}

const FocusPadContext = createContext<FocusPadContextValue | null>(null);

export interface FocusPadProviderProps {
  children: ReactNode;
  /**
   * Override the persistence adapter. Defaults to the real
   * localStorage-backed `focusPadRepo`. Tests pass a stub via this prop.
   */
  repo?: typeof focusPadRepo;
  /**
   * Override initial load resolution. Useful for deterministic tests that
   * want to inject notes or simulate load failure without touching
   * localStorage.
   */
  initialLoad?: () => FocusPadRepoLoadResult;
}

export function FocusPadProvider({
  children,
  repo = focusPadRepo,
  initialLoad,
}: FocusPadProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, EMPTY_STATE);
  const stateRef = useRef(state);
  stateRef.current = state;
  const bootstrappedRef = useRef(false);

  // Bootstrap: run once on mount, hydrate state from the persistence adapter.
  useEffect(() => {
    if (bootstrappedRef.current) return;
    bootstrappedRef.current = true;
    dispatch({ type: 'SET_STORAGE_STATUS', storageStatus: 'loading' });
    const result = initialLoad ? initialLoad() : repo.load();
    if (result.ok) {
      dispatch({
        type: 'INIT',
        payload: {
          notes: result.notes,
          storageStatus: 'ready',
          lastError: null,
        },
      });
    } else {
      dispatch({
        type: 'INIT',
        payload: {
          notes: [],
          storageStatus: 'error',
          lastError: errorFromLoadFailure(result),
        },
      });
    }
  }, [repo, initialLoad]);

  // Persist notes whenever they change after successful bootstrap.
  useEffect(() => {
    if (!bootstrappedRef.current) return;
    if (state.storageStatus === 'idle' || state.storageStatus === 'loading') {
      return;
    }
    const result = repo.save(state.notes);
    if (!result.ok) {
      dispatch({
        type: 'SET_LAST_ERROR',
        error: { kind: 'storage-unavailable', message: result.message },
      });
    }
  }, [state.notes, state.storageStatus, repo]);

  const setActiveSurface = useCallback((surface: SurfaceId) => {
    dispatch({ type: 'SET_ACTIVE_SURFACE', surface });
  }, []);

  const selectRecord = useCallback((recordId: string | null) => {
    dispatch({ type: 'SELECT_RECORD', recordId });
  }, []);

  const setActivePanel = useCallback((panel: PanelId) => {
    dispatch({ type: 'SET_ACTIVE_PANEL', panel });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const upsertNote = useCallback((body: string) => {
    const trimmed = body.trim();
    if (trimmed.length === 0) return;
    dispatch({ type: 'SET_DRAFT_BODY', body: trimmed });
    dispatch({ type: 'SAVE_DRAFT_NOTE' });
  }, []);

  const actions = useMemo<AppBridgeActions>(
    () => ({
      setActiveSurface,
      selectRecord,
      setActivePanel,
      clearError,
      upsertNote,
    }),
    [setActiveSurface, selectRecord, setActivePanel, clearError, upsertNote],
  );

  const snapshot = useCallback(() => makeSnapshot(stateRef.current), []);

  const value = useMemo<FocusPadContextValue>(
    () => ({ state, actions, snapshot }),
    [state, actions, snapshot],
  );

  return <FocusPadContext.Provider value={value}>{children}</FocusPadContext.Provider>;
}

function useFocusPadContext(): FocusPadContextValue {
  const ctx = useContext(FocusPadContext);
  if (!ctx) {
    throw new Error('useFocusPad must be used inside a <FocusPadProvider>.');
  }
  return ctx;
}

/**
 * Returns the bridge contract: a `state()` accessor plus the action methods
 * screen-owner stories wire into UI events. Components that only need a
 * single field should call `useFocusPadStore()` and pick what they need
 * instead, so they only re-render when that field changes.
 */
export function useFocusPad(): AppBridge {
  const { actions, snapshot } = useFocusPadContext();
  return {
    state: snapshot,
    setActiveSurface: actions.setActiveSurface,
    selectRecord: actions.selectRecord,
    setActivePanel: actions.setActivePanel,
    clearError: actions.clearError,
    upsertNote: actions.upsertNote,
  };
}

/**
 * Reads the full internal store state, including notes and the draft body.
 * Intended for the shell and bridge code, not for screen-owner stories.
 */
export function useFocusPadStore(): FocusPadState {
  return useFocusPadContext().state;
}

/**
 * Imperative handle for non-React consumers (tests, the window.app bridge,
 * supervisors). Returns a stable snapshot accessor that reads the latest
 * dispatched state without forcing a re-render.
 */
export function createFocusPadAccessor(getValue: () => FocusPadContextValue): () => FocusPadContextValue {
  return () => getValue();
}

export type { StorageStatus };