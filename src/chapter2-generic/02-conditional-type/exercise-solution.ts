export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
        T,
    >() => T extends Y ? 1 : 2
    ? true
    : false;

type UserPath = ["users", ":id"];
type UserOrgPath = ["users", ":id", "orgs", ":orgId"];

type ExtractPathParams<T extends string[]> = {
    [K in T[number] as K extends `:${infer P}` ? P : never]: string;
}
type Test = ExtractPathParams<UserPath>;
type Test2 = ExtractPathParams<UserOrgPath>;

type tests = [
    Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
    Expect<Equal<ExtractPathParams<UserOrgPath>, { id: string, orgId: string }>>,
];
