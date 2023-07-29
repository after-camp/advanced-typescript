import { expect, it } from "vitest";

class TypeSafeStringMap<TMap extends Record<string, string> = {}> {
  private map: TMap;
  constructor() {
    this.map = {} as TMap;
  }

  get(key: keyof TMap): string {
    return this.map[key];
  }

  set<K extends string>(key: K, value: string): unknown {
    (this.map[key] as any) = value;

    return this;
  }
}

const map = new TypeSafeStringMap()
  .set("foo", "bar")
  .set("hello", "word")
  .set("junsuk", "park");

it("Should not allow getting values which do not exist", () => {
  map.get(
    // @ts-expect-error
    "jim",
  );
});

it("Should return values from keys which do exist", () => {
  expect(map.get("foo")).toBe("bar");
  expect(map.get("hello")).toBe("word");
  expect(map.get("junsuk")).toBe("park");
});
