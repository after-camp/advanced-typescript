export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

function getProtocol(url: `${"http" | "https"}://${string}`) {
    return url.split(":")[0] as "http" | "https";
}

getProtocol("http://typescriptlang.org");
// @ts-expect-error
getProtocol("typescriptlang.org");
