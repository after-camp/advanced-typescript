interface Observer {
    update: (value: string) => void;
}

type ClassAccessorDecorator = (
    value: ClassAccessorDecoratorTarget<unknown, unknown>,
    context: ClassAccessorDecoratorContext
) => ClassAccessorDecoratorResult<unknown, any>;

const observable: ClassAccessorDecorator = (accessor, context) => {
    return {
        set(this, newValue: any) {
            // @ts-ignore
            this.observers.forEach(o => o.update(newValue))
            return accessor.set.call(this, newValue);
        }
    }
}

class SimpleObserver implements Observer {
    update(value: string): void {
        console.log(`SimpleObserver: ${value}`);
    }
}

@Observers([new SimpleObserver()])
class Manager {
    @observable
    accessor age = 2

    constructor() {
    }
}

function Observers(_observers: Observer[]) {
    return function _<T extends {new(...args: any[]): {}}>(baseClass: T, context: ClassDecoratorContext) {
        return class extends baseClass {
            observers = _observers;
            constructor(...args: any[]) {
                super(args);
            }
        }
    }
}

const manager = new Manager();

manager.age = 3;
console.log("=>(04-observable.ts:40) manager", manager);
