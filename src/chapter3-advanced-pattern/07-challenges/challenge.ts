interface Left<E> {
    _tag: "Left",
    left: E,
}

interface Right<A> {
    _tag: "Right",
    value: A
}

export type Either<E, A> = Left<E> | Right<A>

function isRight<E, A>(e: unknown) {
    return e.hasOwnProperty('value')
}

function right<T>(value: T): unknown {
    return {
        _tag: 'Right',
        value
    }
}

function main() {
    const e = right(1);

    if (isRight(e)) {
        console.log(e.value)
    } else {
        console.log(e.left)
    }
}
