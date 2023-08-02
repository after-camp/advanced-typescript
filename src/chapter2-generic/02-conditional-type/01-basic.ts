import {Equal, Expect} from "../../helper";

type YouSayGoodbyeAndISayHello = unknown;

type tests = [
    Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
    Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
