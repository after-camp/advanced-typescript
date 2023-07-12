import {Equal, Expect } from "../../helper";

interface FruitMap {
    apple: "red";
    banana: "yellow";
    orange: "orange";
}

type TransformedFruit = unknown

type tests = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];
