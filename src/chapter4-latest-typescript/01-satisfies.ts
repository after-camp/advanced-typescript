/// #1: strong type checking
type GHIssueURLParams = {
    title: string;
    body: string;
};

const params = new URLSearchParams({
    title: "New Issue",
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
        content: "Lorem ipsum.",
    } satisfies Post),
});

///

let numericId = 1;
let id: string | number = "123";
if (typeof numericId !== "undefined") {
    id = numericId
}


//// #2: tuple
type MoreThanOneMember = [any, ...any[]];

const array = [1, 2, 3];
//    ^? number[]
const maybeExists = array[3];
//    ^? number | undefined
const tuple: MoreThanOneMember = [1, 2, 3];
//    ^?
const doesNotExist = tuple[3];

////

type NavElement = {
    title: string;
    url?: string;
    children?: readonly NavElement[];
};

const nav: NavElement[] = [
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
] as const

nav[0]?.children



