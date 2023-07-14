import {Equal, Expect} from "../../helper.ts";

type YouSayGoodbyeAndISayHello = unknown;

type tests = [
    Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
    Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
