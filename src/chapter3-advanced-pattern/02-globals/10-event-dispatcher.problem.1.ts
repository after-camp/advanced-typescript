import { expect, it } from "vitest";

declare global {
  interface DispatchableEvent {
    LOG_IN: {
      username: string;
      password: string;
    };
  }
  type UnionOfDispatchableEvents = {
    [K in keyof DispatchableEvent]: {
      type: K;
    } & DispatchableEvent[K];
  }[keyof DispatchableEvent];
}

const dispatchEvent = (event: UnionOfDispatchableEvents) => {
  // Imagine that this function dispatches this event
  // to a global handler
};

it("Should be able to dispatch a LOG_IN and LOG_OUT event", () => {
  dispatchEvent({ type: "LOG_IN", username: "username", password: "password" });
  dispatchEvent({ type: "LOG_OUT" });
});
