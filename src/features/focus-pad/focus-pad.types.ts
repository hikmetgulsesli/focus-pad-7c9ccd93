// focus-pad.types.ts
// Shared domain types for the Focus Pad app shell, notes state, persistence,
// and stable navigation contracts. Owned by US-001; other stories consume these
// types through focused, in-scope imports rather than reading sibling stores.

export const FOCUS_PAD_PERSISTED_KEY = 'focus-pad:notes:v1';
export const FOCUS_PAD_SCHEMA_VERSION = 1 as const;

export type SurfaceId =
  | 'record-editor'
  | 'record-operations'
  | 'insights';

export type PanelId = 'notes' | 'list' | 'detail';

export type StorageStatus = 'idle' | 'loading' | 'ready' | 'error';

export type ErrorKind =
  | 'storage-unavailable'
  | 'corrupted-payload'
  | 'save-failed'
  | 'unknown';

/**
 * A Focus Pad record. The current PRD is intentionally tiny (one free-text
 * note), but downstream screen-owner stories (US-002, US-003) need a stable
 * shape with an id, a body, and timestamps so they can extend without
 * rewriting this story's contract.
 */
export interface FocusPadRecord {
  id: string;
  body: string;
  createdAt: number;
  updatedAt: number;
}

/**
 * Aggregate counts surfaced through the bridge. Other counts (records,
 * archives, operations) will be added by downstream stories without
 * changing this shape.
 */
export interface FocusPadCounts {
  notes: number;
}

/**
 * Snapshot exposed via the `window.app` test bridge. Keep this shape stable
 * because tests, supervisor hooks, and downstream stories depend on it.
 */
export interface FocusPadSnapshot {
  counts: FocusPadCounts;
  activeSurface: SurfaceId;
  selectedRecordId: string | null;
  activePanel: PanelId;
  storageStatus: StorageStatus;
  lastError: { kind: ErrorKind; message: string } | null;
}

/**
 * Stable navigation/action handlers exposed to other stories and tests.
 * Screen-owner stories wire UI events into these handlers instead of
 * re-implementing shell state.
 */
export interface AppBridgeActions {
  setActiveSurface: (surface: SurfaceId) => void;
  selectRecord: (recordId: string | null) => void;
  setActivePanel: (panel: PanelId) => void;
  clearError: () => void;
  upsertNote: (body: string) => void;
}

/**
 * Public bridge contract exposed on `window.app`. The `state()` accessor
 * returns a stable `FocusPadSnapshot` so non-React consumers can read the
 * latest state without forcing a re-render. The action methods are the
 * same handlers screen-owner stories wire into their UI events.
 */
export interface AppBridge extends AppBridgeActions {
  state: () => FocusPadSnapshot;
}

/**
 * Internal store state. Includes the bridge snapshot plus the full notes
 * collection and a transient "draft note" body for the inline editor.
 */
export interface FocusPadState extends FocusPadSnapshot {
  notes: FocusPadRecord[];
  draftBody: string;
}

export type FocusPadAction =
  | { type: 'INIT'; payload: { notes: FocusPadRecord[]; storageStatus: StorageStatus; lastError: FocusPadSnapshot['lastError'] } }
  | { type: 'SET_ACTIVE_SURFACE'; surface: SurfaceId }
  | { type: 'SELECT_RECORD'; recordId: string | null }
  | { type: 'SET_ACTIVE_PANEL'; panel: PanelId }
  | { type: 'SET_DRAFT_BODY'; body: string }
  | { type: 'SAVE_DRAFT_NOTE' }
  | { type: 'SET_STORAGE_STATUS'; storageStatus: StorageStatus }
  | { type: 'SET_LAST_ERROR'; error: FocusPadSnapshot['lastError'] }
  | { type: 'CLEAR_ERROR' };