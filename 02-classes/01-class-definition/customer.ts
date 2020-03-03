class Customer {
    firstName: string;
    lastName: String;

    constructor (theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let myCustomer = new Customer();
// myCustomer.firstName = "pupu";
// myCustomer.lastName = "yan";

let myCustomer = new Customer("pupu","yan");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);