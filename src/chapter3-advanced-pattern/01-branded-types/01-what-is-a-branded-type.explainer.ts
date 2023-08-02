import {Brand} from "../../helper";

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

type UserObject = Brand<
  {
    id: string;
    name: string;
  },
  "User"
>;

const user: UserObject = {
  id: "awdawd",
  name: "awdawdawd",
} as UserObject;

const verifyPassword = (password: Password) => {};

const password = "1231423" as Password;

const email = "mpocock@me.com" as Email;

verifyPassword(email)
