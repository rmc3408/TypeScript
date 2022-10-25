const names1: Array<string> = ['r', 'b', 'c'];
names1[0].split('');
const names2: Array<number> = [1,2,3];
const names3: string[] = [];
const names4: Array<string | number> = [];


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is results');
    }, 1000);
});
promise.then(data => console.log(data.toUpperCase()));



function merge<T, S>(a: string, b: number, c: T, d: S) {
    a.toUpperCase();
    b.toFixed(2);
    return Object.assign(c, d);
}

const merged1 = merge<number, number>('Max', 30, 30, 40);
const merged2 = merge('Max', 30, [1,2,3], 'sapo');
const merged3 = merge('Max', 30, { name: 'R' }, { age: 39 });

merged2.push();
merged3.age = 23;

console.log(merged3);

//give any structure of object
function joint<T extends object | string, S extends object | number>(c: T, d: S) {
    return Object.assign(c, d);
}
const merged4 = joint({ name: 'R' }, { age: 39 });
const merged5 = joint({ name: 'R' }, 39);  

console.log(merged4);
console.log(merged5);




function countPrint<T extends wordLen>(c: T): [T, string] {
    let description = 'no values';
    if (c.length !== 0) {
        description = 'Got ' + c.length + ' elements.';
    }
    return [c, description];
}

interface wordLen {
    length: number;
}

console.log(countPrint('hello'));
console.log(countPrint([1, 2, 3]));
console.log(countPrint(''));


function extractKey<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'value of key is ' + obj[key];
}

console.log(extractKey({ name: 'Raph' }, 'name'));

