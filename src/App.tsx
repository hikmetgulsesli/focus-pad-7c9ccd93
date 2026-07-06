import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Save } from 'lucide-react';

import {
  FocusPadProvider,
  useFocusPad,
  useFocusPadStore,
} from './features/focus-pad/focus-pad.store';
import { installAppBridge } from './test/bridge';

function FocusPadShell() {
  // Read the bridge (for actions + non-React handle) and the full store
  // (for React-rendered fields).
  const bridge = useFocusPad();
  const {
    activeSurface,
    activePanel,
    storageStatus,
    lastError,
    counts,
    notes,
    selectedRecordId,
    draftBody,
  } = useFocusPadStore();
  const [inputValue, setInputValue] = useState(draftBody);

  // Keep the controlled input in sync if the store clears the draft after save.
  useEffect(() => {
    setInputValue(draftBody);
  }, [draftBody]);

  // Install the window.app bridge so tests and the supervisor can observe
  // the live shell state without React internals.
  useEffect(() => {
    return installAppBridge(bridge).teardown;
  }, [bridge]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    bridge.upsertNote(inputValue);
    // React batches the SET_DRAFT_BODY + SAVE_DRAFT_NOTE dispatches so the
    // draftBody effect below does not fire within the same render cycle.
    // Clearing the controlled-input state directly guarantees the textarea
    // resets as soon as the save commits.
    setInputValue('');
  };

  const selected = notes.find((note) => note.id === selectedRecordId) ?? null;

  return (
    <div
      data-setfarm-root="focus-pad"
      data-testid="setfarm-app-root"
      data-surface={activeSurface}
      data-panel={activePanel}
      data-storage-status={storageStatus}
      data-count={counts.notes}
      className="min-h-screen bg-background text-on-surface flex flex-col items-center px-container-padding py-12 gap-stack-gap"
    >
      <header className="w-full max-w-2xl flex flex-col gap-2">
        <h1
          data-testid="focus-pad-title"
          className="font-display text-headline-md text-primary"
        >
          Focus Pad
        </h1>
        <p className="font-body-md text-body-md text-secondary">
          Capture a thought, save it, and stay present.
        </p>
      </header>

      {lastError ? (
        <div
          role="alert"
          data-testid="focus-pad-error"
          className="w-full max-w-2xl rounded-lg border border-error/20 bg-error-container/20 text-error p-container-padding font-label-md"
        >
          <div className="flex items-start justify-between gap-4">
            <span>{lastError.message}</span>
            <button
              type="button"
              onClick={bridge.clearError}
              className="font-label-sm text-label-sm text-error hover:text-primary rounded-full px-2 py-1 hover:bg-surface-container-high"
            >
              Dismiss
            </button>
          </div>
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        data-testid="focus-pad-form"
        className="w-full max-w-2xl flex items-start gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-container-padding"
      >
        <label className="sr-only" htmlFor="focus-pad-input">
          New note
        </label>
        <textarea
          id="focus-pad-input"
          data-testid="focus-pad-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="What is on your mind?"
          rows={3}
          className="flex-1 resize-none rounded border border-outline-variant bg-surface px-3 py-2 font-body-md text-body-md text-on-surface placeholder:text-secondary focus:border-primary focus:ring-primary/20 form-input-focus"
        />
        <button
          type="submit"
          data-testid="focus-pad-save"
          aria-label="Save note"
          disabled={!inputValue.trim()}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container disabled:opacity-50 disabled:cursor-not-allowed transition-none"
        >
          <Save aria-hidden="true" className="h-5 w-5" />
        </button>
      </form>

      <section
        data-testid="focus-pad-summary"
        data-count={counts.notes}
        className="w-full max-w-2xl flex flex-col gap-2"
      >
        <h2 className="font-label-md text-label-md text-secondary">
          {counts.notes === 0
            ? 'No notes yet.'
            : counts.notes === 1
              ? '1 note saved.'
              : `${counts.notes} notes saved.`}
        </h2>
        {selected ? (
          <article
            data-testid="focus-pad-selected"
            className="rounded-lg border border-outline-variant bg-surface p-container-padding font-body-md text-body-md text-on-surface"
          >
            {selected.body}
          </article>
        ) : null}
      </section>
    </div>
  );
}

export default function App() {
  return (
    <FocusPadProvider>
      <FocusPadShell />
    </FocusPadProvider>
  );
}