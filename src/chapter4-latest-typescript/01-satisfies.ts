const a = 1;
const b: number = 1;
const c = 1 as number;
const d  = 1 satisfies number;

/// #1: strong type checking
type GHIssueURLParams = {
    title: string;
    body: string;
};

const GITHUB_REPO = "https://api.github.com/repos/krzkaczor/ts-essentials/issues";

const params = new URLSearchParams({
    title: "New Issue",
    body: "Lorem ipsum.",
} satisfies GHIssueURLParams);
const url = `${GITHUB_REPO}?${params}`;

///////////////////////

type Post = {
    title: string;
    content: string;
};

fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "New Post",
        content: 'asdf',
    } satisfies Post),
});

///

let numericId = 1;
let id = "123" satisfies string | number;
if (typeof numericId !== "undefined") {
    id = numericId
}

//// #2: tuple
type MoreThanOneMember = [any, ...any[]];

const array = [1, 2, 3];
//    ^? number[]
const maybeExists = array[3];
//    ^? number | undefined
const tuple  = [1, 2, 3] satisfies MoreThanOneMember;
//    ^?
const doesNotExist = tuple[3];

////

type NavElement = {
    title: string;
    url?: string;
    children?: readonly NavElement[];
};

const nav  = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        children: [
            {
                title: "Team",
                url: "/about/team",
            },
        ],
    },
] as const satisfies readonly NavElement[];

nav[0]?.children



