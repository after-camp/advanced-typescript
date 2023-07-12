import {Equal, Expect} from "../../helper";

export const fakeDataDefaults = {
    foo: "bar",
    bar: 123,
    baz: true,
};

export type FooType = typeof fakeDataDefaults["foo"];
export type BarType = typeof fakeDataDefaults["bar"];
export type BazType = typeof fakeDataDefaults["baz"];

type tests = [
    Expect<Equal<FooType, string>>,
    Expect<Equal<BarType, number>>,
    Expect<Equal<BazType, boolean>>,
];
