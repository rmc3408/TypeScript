
/**
 * Build company must have depatment.
 * Create object for each department.
 */

class Department {
    
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: '+ this.name)
    }
}

const acc = new Department("financial");
console.log(acc)
acc.describe();

/**
 * Use describe metho from Department as pointing reference.
 * Calling this method; this.name will look in acc2 object
 * need to have name.
 * 
 * it must have same name as department class and object key
 */
const acc2 = {
    name: 'Warehouse',
    describe: acc.describe 
}

acc2.describe();