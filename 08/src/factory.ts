function Template(temp: string, hookid: string) {
    console.log('TEMPLATE RENDER')
    return function (constructor: any) {
        console.log('Template executed for the <div> with class name = ' + hookid);
        console.log(constructor);

        const hookElem = document.getElementById(hookid);
        const p2 = new constructor();

        console.log(hookElem);

        if (hookElem) {
            hookElem.innerHTML = temp;
            hookElem.querySelector('h1')!.textContent = p2.name;
        }
    }
}
function Loggered(name: string) {
    console.log('LOGGER RENDER')
    return function (com: Function) {
        console.log('logger function executed in class ' + name);
        console.log(com);
    }
}

// Render from top to bottom.
// Execution go from bottom to top.
@Loggered('Ivanito')
@Template('<h1>Ivanovitch</h1>', 'msg')
class Persona {
    public name = 'Ivan';

    constructor() {
        console.log('Person object created with name ' + this.name);
    }
}


// Property decorator
function Log1(target: any, name: string) {
    console.log('Log Property decorator executed');
    console.log(target, name)
}

//acessor Decorator
function Log2(target: any, name: string, desc: PropertyDescriptor) {
    console.log('Acessor decorator executed');
    console.log(target, name)
    console.log(desc);
}

//acessor Decorator
function Log3(target: any, name: string, desc: PropertyDescriptor): PropertyDescriptor {
    console.log('Method decorator executed');
    console.log(target, name)
    console.log(desc);
    return { enumerable: true };
}

//Parameter Decorator
function Log4(target: any, name: string, indexPosition: number) {
    console.log('Parameter decorator executed');
    console.log(target, name)
    console.log(indexPosition);
}

class Product {
    @Log1
    private title: string;
    private _price: number;

    @Log2
    get getPrice() : number {
        return this._price;
    }

    @Log2
    set setPrice(v : number) {
        this._price = v;
    }
    get getTitle() : string {
        return this.title;
    }
    set setTitle(v : string) {
        this.title = v;
    }

    constructor(t: string, p: number) {
        this._price = p;
        this.title = t;
    }

    @Log3
    getFinalPrice(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}