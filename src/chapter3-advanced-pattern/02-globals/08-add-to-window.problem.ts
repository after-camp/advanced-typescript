import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

window.makeGreeting = () => "Hello!";

it("Should let you call makeGreeting from the window object", () => {
  expect(window.makeGreeting()).toBe("Hello, world!");

  type test1 = Expect<Equal<typeof window.makeGreeting, () => string>>;
});
