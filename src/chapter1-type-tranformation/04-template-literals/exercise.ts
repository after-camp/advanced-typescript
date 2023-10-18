export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

function getProtocol(url: unknown) {
    return url.split(":")[0];
}

getProtocol("http://typescriptlang.org");
// @ts-expect-error
getProtocol("typescriptlang.org");
