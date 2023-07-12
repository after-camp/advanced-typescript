import {Equal, Expect} from "../../helper";

type Fruit =
    | {
    name: "apple";
    color: "red";
}
    | {
    name: "banana";
    color: "yellow";
}
    | {
    name: "orange";
    color: "orange";
};

type TransformedFruit = {
    [K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
}[Fruit['name']];

type Test = {
    [K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
}

type tests = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];
