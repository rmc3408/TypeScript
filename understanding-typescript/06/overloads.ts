type combine = string | number; //Union

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: combine, b: combine) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return +a + +b;
}

const r = add('R', 'M');
r.split('');

const n = add(1, 5);
n.toFixed(2);