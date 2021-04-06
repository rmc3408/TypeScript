class DataStore<T> { //only for primitive data types
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getDataInfo() {
        return this.data;
    }
}
const txt = new DataStore<string>();
txt.addItem('Raphael');
txt.addItem('Molinaro');
//txt.addItem(10);   <--error
txt.addItem('Silva');
txt.removeItem('Silva');
console.log(txt.getDataInfo());

const num = new DataStore<number>();
num.addItem(20);
console.log(num.getDataInfo());



