import {Equal, Expect } from "../../helper";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = unknown

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": "/";
                "/about": "/about";
                "/admin": "/admin";
                "/admin/users": "/admin/users";
            }
        >
    >,
];
