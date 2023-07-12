import {Equal, Expect} from "../../helper";

const getUser = () => {
    return Promise.resolve({
        id: "123",
        name: "John",
        email: "john@example.com",
    });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
    Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
