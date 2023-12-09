export class Manager {
    budget = 0
    constructor() {
    }

    @withBudget(100)
    writeTest() {
        console.log("writeTest");
    }
}

function withBudget(budget: number) {
    return function<T extends {budget: number}>(target: Function, context: ClassMethodDecoratorContext) {
        return function (this: T, ...args: any[]) {
            this.budget += budget;
            return target;
        }
    }
}

const manager = new Manager();
manager.writeTest();
manager.writeTest();
console.log("manager: ", manager);
