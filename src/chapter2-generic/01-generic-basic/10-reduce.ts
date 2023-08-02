import { expect, it } from "vitest";
import {Equal, Expect} from "../../helper";

const array = [
    {
        name: "Park",
    },
    {
        name: "Kim",
    },
];

const obj = array.reduce((accum, item) => {
    accum[item.name] = item;
    return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
    expect(obj).toEqual({
        Park: {
            name: "Park",
        },
        Kim: {
            name: "Kim",
        },
    });

    type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
