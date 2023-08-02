import {Equal, Expect} from "../../helper";

export const returnWhatIPassIn = <T extends string>(t: T) => t;

const a = returnWhatIPassIn("a");

type test1 = Expect<Equal<typeof a, "a">>;

// @ts-expect-error
returnWhatIPassIn(1);

// @ts-expect-error
returnWhatIPassIn(true);

// @ts-expect-error
returnWhatIPassIn({
    foo: "bar",
});
