import {Equal, Expect} from "../../helper";

export const Color = {
    Red: "red",
    Green: "green",
    Blue: "blue",
}

type RedAndBlue = typeof Color["Red" | "Blue"]

type tests = [
    Expect<Equal<RedAndBlue, "red" | "blue">>
];
