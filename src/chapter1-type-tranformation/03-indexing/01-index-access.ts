import {Equal, Expect} from "../../helper";

export const fakeDataDefaults = {
    foo: "bar",
    bar: 123,
    baz: true,
};

export type FooType = unknown;
export type BarType = unknown;
export type BazType = unknown;

type tests = [
    Expect<Equal<FooType, string>>,
    Expect<Equal<BarType, number>>,
    Expect<Equal<BazType, boolean>>,
];
