function Autobind(_targetCtor: any, _methodName: string, desc: PropertyDescriptor) {
    const origFn = desc.value;
    console.log('Description of Class', _targetCtor)
    console.log('Description of method', desc)

    const newDesc: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            console.log('inside method', this)
            const boundFn = origFn.bind(this) // conect this object with method
            return boundFn
        }
    };
    return newDesc;
}

class Printer {
    private message = 'works';

    @Autobind
    showMessage() {
        console.log(this) //bind to target Event CLICK
    }
}

const p = new Printer();

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage);
btn.addEventListener('click', p.showMessage.bind(p));




