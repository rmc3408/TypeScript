type strABLE = String | Number; //Union
type numABLE = Number | Boolean; //Union
type universal = strABLE & numABLE; //intersection of number.

/**
 * 
 * Type guard use TYPEOF to verify string or number.
 * 
 * typeof
 * in
 * instance of 
 * 
 */
function adding(a: strABLE, b: strABLE) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return +a + +b;
}



type user = {
    name: String;
    id: number;
}

type jobHistory = {
    name: String;
    start: Date;
};

type fullemployed = user & jobHistory; //intersection - MUST have all 3
type partemployed = user | jobHistory; //union - at least 2 or all properties


function checkUser(emp: partemployed) {
    console.log('name: ' + emp.name);

    //does not work 
    // if (typeof emp === 'object' || typeof emp === 'user' ) {
    //     console.log('id: ' + emp.id);
    // };
    
    if ('id' in emp) {
        console.log('id: ' + emp.id);
    }
    if ('start' in emp) {
        console.log('start Date: ' + emp.start);
    }
}

const user1 = {
    name: 'Sofie',
    id: 13
};

checkUser(user1);
checkUser({name: 'Apolo', id: 10, start: new Date()});


class Car {
    drive() {
        console.log('Car...');
    }
}

class Truck {
    drive() {
        console.log('Truck...');
    }
    loading(n: number) {
        console.log('loading: ' + n);
    }
}

type Vehicles = Car | Truck;

const veh01 = new Car();
const veh02 = new Truck();

function checkVeh(v: Vehicles) {
    v.drive();
    if (v instanceof Truck) {
        v.loading(15);
    }
}

checkVeh(veh01);
checkVeh(veh02);