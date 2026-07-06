// bridge.ts
// Window bridge that exposes the Focus Pad store snapshot and actions on
// `window.app` so QA, integration tests, and console-driven debugging can
// inspect shared state without re-implementing the React tree.
//
// Contract: window.app = {
//   state: () => ({ counts: { notes }, activeSurface, selectedRecordId, activePanel, storageStatus, lastError }),
//   setActiveSurface, selectRecord, setActivePanel, clearError, upsertNote,
// }
//
// Owned by US-001 (app shell, state, persistence).

import type { AppBridge } from '../features/focus-pad/focus-pad.types';

declare global {
  interface Window {
    app?: AppBridge;
  }
}

/**
 * Installs the Focus Pad app bridge on `window.app` for tests and the
 * supervisor. The bridge exposes the stable contract required by US-001:
 * a `state()` accessor for the live snapshot, plus the action handlers
 * that screen-owner stories call when wiring UI events into the shell.
 *
 * Returns a teardown function the caller MUST invoke to avoid leaking the
 * bridge across test runs.
 */
export interface BridgeHandle {
  bridge: AppBridge;
  teardown: () => void;
}

export function installAppBridge(bridge: AppBridge): BridgeHandle {
  window.app = bridge;
  return {
    bridge,
    teardown: () => {
      if (window.app === bridge) {
        delete window.app;
      }
    },
  };
}

export function readAppBridge(): AppBridge | null {
  return window.app ?? null;
}

export function hasAppBridge(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.app);
}