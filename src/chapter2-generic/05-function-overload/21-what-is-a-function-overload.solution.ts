import {Equal, Expect} from "../../helper";

function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: "jun"): "jun";
function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const jun = returnWhatIPassIn("jun");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof jun, "jun">>];
