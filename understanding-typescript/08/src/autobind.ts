function Autobind(_1: any, _2: string, desc: PropertyDescriptor) {
    const origFn = desc.value;
    const newDesc: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origFn.bind(this);
            return boundFn;
        }
    };
    return newDesc;
}

class Printer {
    message = 'works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
//p.showMessage();

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage);

