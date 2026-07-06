import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  focusPadFixturePersistedPayload,
  focusPadFixtureNotes,
} from "../../__fixtures__/focus-pad.fixture";
import {
  FOCUS_PAD_PERSISTED_KEY,
  FOCUS_PAD_SCHEMA_VERSION,
  type FocusPadRecord,
} from "./focus-pad.types";
import { focusPadRepo } from "./focus-pad.repo";

interface MemoryStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

const installMemoryStorage = (): MemoryStorage => {
  const store = new Map<string, string>();
  return {
    getItem: (key) => (store.has(key) ? store.get(key)! : null),
    setItem: (key, value) => {
      store.set(key, String(value));
    },
    removeItem: (key) => {
      store.delete(key);
    },
  };
};

const replaceLocalStorage = (memory: MemoryStorage | null) => {
  Object.defineProperty(window, "localStorage", {
    configurable: true,
    writable: true,
    value: memory as unknown as Storage,
  });
};

describe("focusPadRepo", () => {
  let memory: MemoryStorage;

  beforeEach(() => {
    memory = installMemoryStorage();
    replaceLocalStorage(memory);
  });

  afterEach(() => {
    replaceLocalStorage(null);
  });

  it("returns an empty notes array when storage has no record", () => {
    const result = focusPadRepo.load();
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.notes).toEqual([]);
    }
  });

  it("loads notes that were persisted with the canonical schema", () => {
    memory.setItem(FOCUS_PAD_PERSISTED_KEY, focusPadFixturePersistedPayload);
    const result = focusPadRepo.load();
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.notes).toHaveLength(focusPadFixtureNotes.length);
      expect(result.notes[0].id).toBe(focusPadFixtureNotes[0].id);
    }
  });

  it("flags corrupted payloads with a recoverable failure shape", () => {
    memory.setItem(FOCUS_PAD_PERSISTED_KEY, "{not-json");
    const result = focusPadRepo.load();
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toBe("corrupted");
      expect(result.message.length).toBeGreaterThan(0);
    }
  });

  it("round-trips notes through save + load", () => {
    const notes: FocusPadRecord[] = [
      {
        id: "round-trip-1",
        body: "Verification round-trip body",
        createdAt: 1_700_000_000_000,
        updatedAt: 1_700_000_060_000,
      },
    ];
    const saveResult = focusPadRepo.save(notes);
    expect(saveResult.ok).toBe(true);

    const raw = memory.getItem(FOCUS_PAD_PERSISTED_KEY);
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw as string);
    expect(parsed.schemaVersion).toBe(FOCUS_PAD_SCHEMA_VERSION);
    expect(parsed.notes).toHaveLength(1);

    const loaded = focusPadRepo.load();
    expect(loaded.ok).toBe(true);
    if (loaded.ok) {
      expect(loaded.notes[0].body).toBe("Verification round-trip body");
    }
  });
});
