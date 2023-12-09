@withCreatedAt
@printDecoratorData
export class Manager {
    task = "Simple task"
    project = "Simple project"

    constructor() {
        console.log("Manager constructor")
    }
}

function withCreatedAt<T extends {new(...args: any[]): {}}>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        createdAt = new Date();
        constructor(...args: any[]) {
            super(args);
        }
    }
}

function printDecoratorData(constructor: Function, context: ClassDecoratorContext) {
    console.log("constructor: ", constructor);
    console.log("context: ", context);

    context.addInitializer(() => {
        console.log("Initialized class: ", context.name);
    })
}

const manager = new Manager();
console.log("manager: ", manager);
