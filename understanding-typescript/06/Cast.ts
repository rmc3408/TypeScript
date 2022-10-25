const elem1 = document.querySelector('p');
const elem2 = document.getElementById('msg');

// const elem3 = <HTMLInputElement>document.getElementById('data')!;
// EXCLAMATION MARK describes that expression NEVER will be NULL.

const elem3 = document.getElementById('data')! as HTMLInputElement;

elem3.value = 'Hello';