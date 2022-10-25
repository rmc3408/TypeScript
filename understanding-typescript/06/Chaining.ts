/**
 * 
 * Check if property exist but acess!! No runtime error.
 * equal to undefined.
 */
type f = {
    id: number,
    name: {
        fn: string,
        ln: string,
        middle?: string
    }
};
const aa: f = {
    id: 23,
    name: {
        fn: 'Raphael',
        ln: 'Molinaro',
        //middle: 'Coelho'
    }
};

console.log(aa.name?.middle)


const user30 = null;
const user31 = undefined;
const user32 = '';
const user33 = 0;
const user34 = false;

const OR = user34 || 'DEFAULT';    // Acept empty, undefined or null , zero, false.
const NULL = user34 ?? 'DEFAULT';  // ONLY accept undefined or null.

console.log(OR);
console.log(NULL);