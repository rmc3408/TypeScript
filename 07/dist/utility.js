"use strict";
function published(t, n, d) {
    let myBook = {};
    myBook.title = t;
    myBook.name = n;
    myBook.date = d;
    return myBook; //casting
}
const names = ['r', 'b'];
//names.push('c');  <--- error
