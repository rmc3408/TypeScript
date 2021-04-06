interface Book {
    title: string;
    name: string;
    date: Date;
}

function published(t: string, n: string, d: Date): Book {
    let myBook: Partial<Book> = {};
    myBook.title = t;
    myBook.name = n;
    myBook.date = d;
    return myBook as Book; //casting
}

const names: Readonly<string[]> = ['r', 'b'];
//names.push('c');  <--- error

