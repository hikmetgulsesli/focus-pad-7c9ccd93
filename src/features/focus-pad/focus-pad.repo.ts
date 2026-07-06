// focus-pad.repo.ts
// Persistence adapter for Focus Pad notes.
// Wraps localStorage with corruption recovery so the app can recover gracefully
// when persisted JSON becomes malformed (storage quota, manual edits, schema drift).
// Owned by US-001 (app shell, state, persistence).

import {
  FOCUS_PAD_PERSISTED_KEY,
  FOCUS_PAD_SCHEMA_VERSION,
  type FocusPadRecord,
} from './focus-pad.types';

export interface FocusPadRepoLoadSuccess {
  ok: true;
  notes: FocusPadRecord[];
}

export interface FocusPadRepoLoadFailure {
  ok: false;
  reason: 'unavailable' | 'corrupted';
  message: string;
}

export type FocusPadRepoLoadResult = FocusPadRepoLoadSuccess | FocusPadRepoLoadFailure;

export interface FocusPadRepoSaveSuccess {
  ok: true;
}

export interface FocusPadRepoSaveFailure {
  ok: false;
  reason: 'unavailable';
  message: string;
}

export type FocusPadRepoSaveResult = FocusPadRepoSaveSuccess | FocusPadRepoSaveFailure;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function sanitizeNote(value: unknown): FocusPadRecord | null {
  if (!isObject(value)) return null;
  if (!isString(value.id)) return null;
  if (!isString(value.body)) return null;
  if (!isFiniteNumber(value.createdAt)) return null;
  if (!isFiniteNumber(value.updatedAt)) return null;
  return {
    id: value.id,
    body: value.body,
    createdAt: value.createdAt,
    updatedAt: value.updatedAt,
  };
}

// Cache the result of the localStorage capability probe so repeat load/save
// calls do not pay the setItem/removeItem cost on every invocation. The
// cache is keyed by the actual `localStorage` object reference so test
// setups that swap in a memory-backed Storage see a fresh probe.
let cachedStorageFor: Storage | null | undefined = undefined;
let cachedStorageResult: Storage | null = null;

function probeStorage(candidate: Storage): boolean {
  try {
    const probeKey = '__focus_pad_probe__';
    candidate.setItem(probeKey, '1');
    candidate.removeItem(probeKey);
    return true;
  } catch {
    return false;
  }
}

function getStorage(): Storage | null {
  if (typeof globalThis === 'undefined') return null;
  const candidate = (globalThis as { localStorage?: Storage }).localStorage ?? null;
  if (cachedStorageFor === candidate) return cachedStorageResult;
  const probed: Storage | null = candidate && probeStorage(candidate) ? candidate : null;
  cachedStorageFor = candidate;
  cachedStorageResult = probed;
  return probed;
}

function loadFromStorage(): FocusPadRepoLoadResult {
  const storage = getStorage();
  if (!storage) {
    return {
      ok: false,
      reason: 'unavailable',
      message: 'localStorage is not available in this environment.',
    };
  }
  let raw: string | null = null;
  try {
    raw = storage.getItem(FOCUS_PAD_PERSISTED_KEY);
  } catch {
    return {
      ok: false,
      reason: 'unavailable',
      message: 'localStorage read failed.',
    };
  }
  if (raw === null || raw === '') {
    return { ok: true, notes: [] };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {
      ok: false,
      reason: 'corrupted',
      message: 'Persisted notes JSON was malformed.',
    };
  }
  if (!isObject(parsed) || !Array.isArray(parsed.notes)) {
    return {
      ok: false,
      reason: 'corrupted',
      message: 'Persisted notes payload did not match the expected shape.',
    };
  }
  const notes = parsed.notes
    .map((entry: unknown) => sanitizeNote(entry))
    .filter((entry: FocusPadRecord | null): entry is FocusPadRecord => entry !== null);
  return { ok: true, notes };
}

function saveToStorage(notes: FocusPadRecord[]): FocusPadRepoSaveResult {
  const storage = getStorage();
  if (!storage) {
    return {
      ok: false,
      reason: 'unavailable',
      message: 'localStorage is not available in this environment.',
    };
  }
  try {
    const payload = JSON.stringify({ schemaVersion: FOCUS_PAD_SCHEMA_VERSION, notes });
    storage.setItem(FOCUS_PAD_PERSISTED_KEY, payload);
    return { ok: true };
  } catch {
    return {
      ok: false,
      reason: 'unavailable',
      message: 'localStorage write failed (quota exceeded or storage disabled).',
    };
  }
}

export const focusPadRepo = {
  load: loadFromStorage,
  save: saveToStorage,
};