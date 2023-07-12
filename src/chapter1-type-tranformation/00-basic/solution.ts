import {Equal, Expect} from "../../helper";

const obj = {
    hello: 'world',
    hello2: 'world2',
    hello3: 'world3',
};

type TestingFramework = keyof typeof obj;

type tests = [Expect<Equal<TestingFramework, "hello" | "hello2" | "hello3">>];
