// Optional stretch. This test is intentionally FLAKY: it races a real
// timer, so it passes/fails at random. Skipped so it never blocks CI.
//
// TODO(student): make it reliable (Vitest fake timers are cleanest), then
// change describe.skip -> describe.

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

describe("flaky timing example (fix me)", () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it("waits at least 50ms", async () => {
    const start = Date.now();
    const promise = new Promise((r) => setTimeout(r, 50));
    vi.advanceTimersByTime(50);
    await promise;
    expect(Date.now() - start).toBeGreaterThanOrEqual(50);
  });
});
