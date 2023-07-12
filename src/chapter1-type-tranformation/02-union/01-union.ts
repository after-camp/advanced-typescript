type A =
    | {
    type: "a";
    a: string;
}
    | {
    type: "b";
    b: string;
}
    | {
    type: "c";
    c: string;
    d: string;
};

type B = "a" | "b" | "c";

enum C {
    a = 'a',
    b = 'b',
    c = 'c'
}
