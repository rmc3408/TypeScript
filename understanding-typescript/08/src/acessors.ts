
// Property decorator receives 2 args
function Log1(target: any, name: string) {
  console.log('Log Property decorator executed');
  console.log(target, name)
}

// acessor Decorator
function Log2(target: any, name: string, desc: PropertyDescriptor) {
  console.log('Acessor decorator executed');
  console.log(target, name)
  console.log(desc);
}

//method Decorator
function Log3(target: any, name: string, desc: PropertyDescriptor): PropertyDescriptor {
  console.log('Method decorator executed');
  console.log(target, name)
  console.log(desc);
  return { enumerable: true };
}

//Parameter Decorator
function Log4(target: any, name: string, indexPosition: number) {
  console.log('Parameter decorator executed');
  console.log(target, name)
  console.log(indexPosition);
}

class Product {
  @Log1
  private title: string;
  private _price: number;

  @Log2
  get getPrice() : number {
      return this._price;
  }
  @Log2
  set setPrice(v : number) {
      this._price = v;
  }

  get getTitle() : string {
      return this.title;
  }
  set setTitle(v : string) {
      this.title = v;
  }

  constructor(t: string, p: number) {
      this._price = p;
      this.title = t;
  }

  @Log3
  getFinalPrice(@Log4 tax: number) {
      return this.getPrice * (1 + tax);
  }
}

const p1 = new Product('Ball', 10)
console.log(p1.getPrice)

p1.setPrice = 100
console.log(p1.getPrice)

console.log(p1.getFinalPrice(0.13))