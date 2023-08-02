import {Equal, Expect} from "../../helper";

type CreateDataShape<TData, TError = undefined> = {
    data: TData;
    error: TError;
};

type tests = [
    Expect<
        Equal<
            CreateDataShape<string>,
            {
                data: string;
                error: undefined;
            }
        >
    >,
    Expect<
        Equal<
            CreateDataShape<boolean, SyntaxError>,
            {
                data: boolean;
                error: SyntaxError;
            }
        >
    >,
];
