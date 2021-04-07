function Template(temp: string, hookid: string) {
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

@Template('<h1>Ivanovitch</h1>', 'msg')
class Persona {
    public name = 'Ivan';

    constructor() {
        console.log('Person object created with name ' + this.name);
    }
}

;