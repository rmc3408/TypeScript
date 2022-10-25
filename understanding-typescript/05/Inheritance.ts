abstract class Dept {
    protected employees: string[] = []
    constructor(public id: number, protected name: string) { // if private = can omit on constructor and in fields.
    }

    abstract describe(this: Dept): void
    //{
        //console.log(`Department ${this.id}: ${this.name}`);
    //}

    createEmp() {
    }

    //abstract ca declare method, not interface
    addEmp(name: string) {
        this.employees.push(name);
    }
}

class IT extends Dept {
    static fiscalYear = 2021;

    private lastR: string;
    
    public get myLastR() : string {
        
        if (this.lastR !== '') {
            return this.lastR;
        }
        throw new Error("Report not found"); 
    }
    
    public set myLastR(v : string) {
        this.lastR = v;
    }
    

    constructor(id: number, name: string, public adm: string[], report: string) {
        super(id, name);
        this.lastR = report;
    }
    printNames() {
        this.adm.forEach(p => console.log(p));
    }
    addEmp(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log(`IT Department ${this.id}: ${this.name}`);
    }

}

const myAcc1 = new IT(2, 'IT', ['Rapha', 'Alessandro', 'Ivan'], '0');
myAcc1.describe();
myAcc1.printNames();
myAcc1.addEmp('Maxi');
console.log(myAcc1);

//GET and SET acess
console.log(myAcc1.myLastR);
myAcc1.myLastR = 'new report';
console.log(myAcc1.myLastR);

//static
console.log(IT.fiscalYear);