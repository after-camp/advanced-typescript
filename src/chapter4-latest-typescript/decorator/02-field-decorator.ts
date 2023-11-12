export class Manager {
    @withTasks
    tasks: string[] = []

    @withCompletedTasks("Done")
    completedTasks: string[] = []

    constructor() {
    }
}

function withTasks<V extends string[]>(target: undefined, context: ClassFieldDecoratorContext<unknown, V>) {
    return function (args: V) {
        args.push("Simple task");
        return args;
    }
}

function withCompletedTasks(task: string) {
    return function <V extends string[]>(target: undefined, context: ClassFieldDecoratorContext<unknown, V>) {
        return function (args: V) {
            args.push(task);
            return args;
        }
    }
}

const manager = new Manager();
console.log("manager: ", manager);
