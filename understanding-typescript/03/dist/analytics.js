"use strict";
console.log("sending...");
var myID = "abc";
var btn = document.querySelector("button");
function add(n1, n2) {
    return n1 + n2;
}
function clickHand(msg, age) {
    console.log("clicked -> " + msg);
    console.log(age);
}
if (btn) {
    btn.addEventListener("click", clickHand.bind(null, "you are welcome", 39));
}
//# sourceMappingURL=analytics.js.map