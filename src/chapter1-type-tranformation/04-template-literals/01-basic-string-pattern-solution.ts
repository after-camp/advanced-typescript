type Path = `/${string}`;

export function makeUrl(path: Path) {
    return `https://mywebsite.com${path}`
}

// Should be OK
makeUrl("/users");

// @ts-expect-error
makeUrl("users/1");
