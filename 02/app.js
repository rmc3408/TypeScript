function add(n1, n2, isP, msg) {
    var sum = n1 + n2;
    if (isP) {
        console.log(msg + sum);
    }
    else
        console.log(msg + 'a text');
}
var number1;
number1 = 5;
var number2 = 2.8;
var isNumber = true;
var text = 'The result is ';
add(number1, number2, isNumber, text);
