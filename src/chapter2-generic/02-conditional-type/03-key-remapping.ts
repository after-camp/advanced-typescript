import {Equal, Expect} from "../../helper.ts";

interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

type OnlyIdKeys<T> = unknown

type tests = [
    Expect<
        Equal<
            OnlyIdKeys<Example>,
            {
                id: string;
                organisationId: string;
                groupId: string;
            }
        >
    >,
    Expect<Equal<OnlyIdKeys<{}>, {}>>
];
