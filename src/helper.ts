export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

declare const brand: unique symbol;

export type Brand<T, TBrand> = T & { [brand]: TBrand };
