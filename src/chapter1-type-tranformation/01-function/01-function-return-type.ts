import { Equal, Expect } from "../../helper";

const myFunc = () => {
    return "hello";
};

type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
