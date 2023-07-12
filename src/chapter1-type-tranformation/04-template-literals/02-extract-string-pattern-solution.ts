import {Equal, Expect} from "../../helper";

type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/products/:id">>];
