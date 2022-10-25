console.log("sending...");

let myID = "abc";
let btn = document.querySelector("button")!;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function clickHand(msg: string, age: number) {
  console.log("clicked -> " + msg);
  console.log(age);
}

if (btn) {
  btn.addEventListener("click", clickHand.bind(null, "you are welcome", 39));
}
