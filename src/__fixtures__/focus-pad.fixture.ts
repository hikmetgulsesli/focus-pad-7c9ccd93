// focus-pad.fixture.ts
// Deterministic test fixtures for the Focus Pad app shell, state, and
// persistence stories. Centralized here so unit tests, the supervisor, and
// downstream screen-owner stories can reuse a single canonical sample
// without re-deriving timestamps or ids.
//
// Owned by US-001 (app shell, state, persistence).

import {
  FOCUS_PAD_PERSISTED_KEY,
  FOCUS_PAD_SCHEMA_VERSION,
  type FocusPadRecord,
} from '../features/focus-pad/focus-pad.types';

/**
 * Deterministic fixed timestamps so tests don't depend on Date.now(). Use a
 * UTC-style ISO-derived epoch so the fixture is timezone-independent.
 */
export const FOCUS_PAD_FIXTURE_EPOCHS = {
  first: 1_700_000_000_000,
  second: 1_700_000_060_000,
  third: 1_700_000_120_000,
} as const;

export const focusPadFixtureNotes: FocusPadRecord[] = [
  {
    id: 'note-fixture-001',
    body: 'Refactor the Focus Pad shell into smaller, testable hooks.',
    createdAt: FOCUS_PAD_FIXTURE_EPOCHS.first,
    updatedAt: FOCUS_PAD_FIXTURE_EPOCHS.first,
  },
  {
    id: 'note-fixture-002',
    body: 'Add storage status surfacing when localStorage write fails.',
    createdAt: FOCUS_PAD_FIXTURE_EPOCHS.second,
    updatedAt: FOCUS_PAD_FIXTURE_EPOCHS.second,
  },
  {
    id: 'note-fixture-003',
    body: 'Verify the window.app bridge matches the AppBridge contract.',
    createdAt: FOCUS_PAD_FIXTURE_EPOCHS.third,
    updatedAt: FOCUS_PAD_FIXTURE_EPOCHS.third,
  },
];

/**
 * JSON-serializable representation of the notes payload. Mirrors the shape
 * persisted by focusPadRepo.save() so tests that seed localStorage can
 * deserialize this directly without rebuilding the wrapper object.
 */
export const focusPadFixturePersistedPayload = JSON.stringify({
  schemaVersion: FOCUS_PAD_SCHEMA_VERSION,
  notes: focusPadFixtureNotes,
});

/**
 * Convenience helper for tests that need to seed localStorage with the
 * fixture payload. Returns the serialized string for tests that prefer to
 * call setItem themselves.
 */
export function seedFocusPadFixture(): string {
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    globalThis.localStorage.setItem(FOCUS_PAD_PERSISTED_KEY, focusPadFixturePersistedPayload);
  }
  return focusPadFixturePersistedPayload;
}

/**
 * An empty fixture (no notes). Useful for tests that need a clean starting
 * state without touching localStorage.
 */
export const focusPadFixtureEmptyNotes: FocusPadRecord[] = [];

/**
 * A single-note fixture for tests that exercise the "first save" path.
 */
export const focusPadFixtureSingleNote: FocusPadRecord[] = [
  {
    id: 'note-fixture-single',
    body: 'A solitary thought.',
    createdAt: FOCUS_PAD_FIXTURE_EPOCHS.first,
    updatedAt: FOCUS_PAD_FIXTURE_EPOCHS.first,
  },
];

export const FOCUS_PAD_FIXTURE_KEY = FOCUS_PAD_PERSISTED_KEY;