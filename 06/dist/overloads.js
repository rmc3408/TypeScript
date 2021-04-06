"use strict";
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return +a + +b;
}
var r = add('R', 'M');
r.split('');
var n = add(1, 5);
n.toFixed(2);
