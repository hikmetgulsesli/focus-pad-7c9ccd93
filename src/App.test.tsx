import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";

const getTestId = (testId: string): HTMLElement | null =>
  document.querySelector<HTMLElement>(`[data-testid='${testId}']`);

const waitForTestId = async (
  testId: string,
  predicate: (node: HTMLElement) => boolean = () => true,
  timeoutMs = 1000,
): Promise<HTMLElement> => {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const found = getTestId(testId);
    if (found && predicate(found)) {
      return found;
    }
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
  throw new Error(`Test id ${testId} did not satisfy predicate within ${timeoutMs}ms`);
};

describe("App", () => {
  beforeEach(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.clear();
    }
    delete (window as Window & { app?: unknown }).app;
  });

  afterEach(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.clear();
    }
    delete (window as Window & { app?: unknown }).app;
  });

  it("renders an application root", async () => {
    render(<App />);
    const root = await waitForTestId("setfarm-app-root");
    expect(root).toBeTruthy();
    expect(root.getAttribute("data-testid")).toBe("setfarm-app-root");
  });

  it("exposes the window.app bridge once mounted", async () => {
    render(<App />);
    await waitForTestId("setfarm-app-root");
    await new Promise<void>((resolve) => setTimeout(resolve, 50));
    expect(
      (window as Window & { app?: unknown }).app,
    ).toBeDefined();
  });

  it("persists a note after filling the input and pressing save", async () => {
    render(<App />);
    const input = await waitForTestId("focus-pad-input");
    fireEvent.input(input, {
      target: { value: "Verification note from US-001 orchestrator" },
    });
    const save = await waitForTestId("focus-pad-save");
    fireEvent.click(save);
    const summary = await waitForTestId("focus-pad-summary", (node) =>
      node.getAttribute("data-count") !== "0",
    );
    expect(summary.getAttribute("data-count")).not.toBe("0");
  });
});
