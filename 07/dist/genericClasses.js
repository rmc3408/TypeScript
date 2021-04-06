"use strict";
class DataStore {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getDataInfo() {
        return this.data;
    }
}
const txt = new DataStore();
txt.addItem('Raphael');
txt.addItem('Molinaro');
//txt.addItem(10);   <--error
txt.addItem('Silva');
txt.removeItem('Silva');
console.log(txt.getDataInfo());
const num = new DataStore();
num.addItem(20);
console.log(num.getDataInfo());
