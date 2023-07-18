import {Equal, Expect} from "../../helper.ts";

function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const jun = returnWhatIPassIn("jun");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof jun, "jun">>];
