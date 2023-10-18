export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

function pick<T, K extends keyof T>(obj: T, picked: K[]) {
    return picked.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {} as Pick<T, K>);
}

const result = pick(
    {
        a: 1,
        b: 2,
        c: 3,
    },
    ["a", "b"]
);
type test = Expect<Equal<typeof result, { a: number; b: number }>>;

pick(
    {
        a: 1,
        b: 2,
        c: 3,
    },
    [
        "a",
        "b",
        // @ts-expect-error
        "d",
    ]
);
