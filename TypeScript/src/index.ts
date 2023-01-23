// let sales = 123_456_789;
// let course:string = 'TypeScript';
// let is_published: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];

// tuple
let user: [number, string] = [1, 'Mosh'];

// enum
enum Size {
    Small,
    Medium,
    Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) return income * 1.2;
    if (income < 50_000) return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

// object
let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    },
};
// can change readonly values
// employee.id = 0;

// advanced types
// type alias, define own type
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
};

// union type
// either type
function kgToLbs(weight: number | string): number {
    // type narrowing
    if (typeof weight === 'number') weight * 2.2;
    else return parseInt(weight) * 2.2;
    return 0;
}

kgToLbs('20');
kgToLbs('10');

// intersection type
// merage types
type Draggable = {
    drag: () => void;
};

type Resizeable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
};

// literal type
// exact, specific
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// null type
function greet(name: string | null): void {
    if (name) console.log(name.toUpperCase());
}
greet(null);

// optional chaining
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);

// Optional property access operator
// only get executed if customer is defined
console.log(customer?.birthday?.getFullYear);

// Optional element access operator
// customers?.[0]

// Optional call 
// let log: any = null;
// log?.('a');