function add(n1: number, n2: number, isP: boolean, msg: string) {
    const sum = n1 + n2;
    if (isP) { console.log(msg + sum); }
    else console.log(msg + 'a text');

}

let number1: number;
number1 = 5;
const number2 = 2.8;
const isNumber = true;
const text = 'The result is ';

add(number1, number2, isNumber, text);
