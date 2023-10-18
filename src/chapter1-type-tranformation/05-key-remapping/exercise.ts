export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

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

type TransformedFruit = unknown

type tests = [
    Expect<
        Equal<TransformedFruit, {
            "apple:red": "apple";
            "banana:yellow": "banana";
            "orange:orange": "orange";
        }>
    >,
];
