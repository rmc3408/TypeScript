type stringable = String | Number; //Union
type numerable = Number | Boolean; //Union
type Universal = stringable & numerable; //intersection of number.



type Admin = {
    name: String;
    id: number;
}

type Person = {
    name: String;
    start: Date;
};

type Employee = Admin & Person; //intersection






interface Admins {
    name: String;
    id: number;
}

interface Persons {
    name: String;
    start: Date;
};

class Employees implements Admins, Persons {
    name = 'Max';
    id = 2;
    start = new Date();
}

const myUser: Employees = {
    name: 'Max',
    id: 2,
    start: new Date()
};