interface Observer {
    update: (value: string) => void;
}

const observable: ClassAccessorDecorator = (accessor, context) => {
    return {
        set(this, newValue: any) {
            // @ts-ignore
            this.observers.forEach(o => o.update(newValue))
            return accessor.set.call(this, newValue);
        }
    }
}

type ClassAccessorDecorator = (
    value: ClassAccessorDecoratorTarget<unknown, unknown>,
    context: ClassAccessorDecoratorContext
) => ClassAccessorDecoratorResult<unknown, any>;

class Manager {
    observers: Observer[] = []

    @observable
    accessor age = 2

    constructor() {
    }
}

class SimpleObserver implements Observer {
    update(value: string): void {
        console.log(`SimpleObserver: ${value}`);
    }
}

const manager = new Manager();
manager.observers.push(new SimpleObserver());

manager.age = 3;
console.log("=>(04-observable.ts:40) manager", manager);
