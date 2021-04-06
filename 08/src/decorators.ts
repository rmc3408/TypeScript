// function Logger(com: Function) {
//     console.log('logger function executed..')
//     console.log(com);
// }

// @Logger


function Logger(name: string) {
    return function (com: Function) {
        console.log('logger function executed in class ' + name);
        console.log(com);
    }
}

@Logger('Person')
class Person {
    public name = 'Ivan';

    constructor() {
        console.log('Person object created with name ' + this.name);
    }
}

const p1 = new Person();