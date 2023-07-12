interface Person {
    first: string;
    last: string;
}

const p: Person = { first: 'Jane', last: 'Jacobs' };

// ---

const v = typeof p
type t = typeof p

// ---

const first = p['first'];
type First = Person['first'];
