type Persons = {
    name: string;
    age: number;
    greet(sentence: string): void;
}

let user1: Persons = {
    name: 'Ivan',
    age: 47,
    greet(phr) {
        console.log(phr)
    }
};

//similar to type
interface Personable extends Named { //structure of object
    //private id: string; ---- i cannot private or public 
    readonly name: string;
    greet(sentence: string): void;
}
interface Named {
    fName: string;
    lName?: string; /// OPTIONAL
}


class Person implements Personable {
    fName = "Maxi";
    lName = "Minions";

    name: string = 'Max';
    username: string = 'Soth'; //can have more than Personable

    constructor(n?: string, d: number = 0) {
        if (n) {
            this.name = n;
        }
        
    }
    greet(phr: string) {
        console.log(phr, this.name);
    }
}

let user2: Personable;
user2 = new Person("Jane Doe");
user2.greet('Hi, here is');



type addFn = (a: number, b: number) => number;
interface addFnable {
    (a: number, b: number): number;
}

let add1: addFnable;
add1 = (n1, n2) => n1 + n2;
