interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle;

function area(shape: Shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    } else {
        return shape.width * shape.height;
    }
}
