import {Equal, Expect} from "../../helper";

function func(
    foo: string,
    obj: {
        bar: number;
        bas: boolean;
    }
) {

}

type FuncParameters = Parameters<typeof func>;

type tests = [
    Expect<
        Equal<
            FuncParameters,
            // tuple type 😅
            [
                string,
                {
                    bar: number;
                    bas: boolean;
                },
            ]
        >
    >,
];
