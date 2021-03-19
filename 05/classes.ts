
/**
 * CLASSES
 * 
 * Build company must have depatment.
 * Create object for each department.
 */

class Department {
    private readonly departID: number = 2;
    //private name: string;
    private employees: string[] = [];

    constructor(private name: string) { // if private = can omit on constructor and in fields.
        //this.name = n;
    }
    describe(this: Department) {
        console.log('Department 00' + this.departID + ': '+ this.name)
    }
    addingEmp(fName: string) {
        this.employees.push(fName);
        //this.departID = this.departID + 1; //error because readonly
    }
    printEmp() {
        console.log(this.employees);
    }



}

const acc = new Department("financial");

console.log(acc)
acc.describe();

acc.addingEmp('Anna');
//acc.employees[1] = 'Suzy';
acc.printEmp();




/**
 * Use describe metho from Department as pointing reference.
 * Calling this method; this.name will look in acc2 object
 * need to have name.
 * 
 * it must have same model as department class
 */

const acc2 = {
    name: 'Warehouse',
    describe: acc.describe 
}
//acc2.describe();

const acc3 = {
    name: 'Shippping',
    described: acc.describe 
}
//acc3.described();

