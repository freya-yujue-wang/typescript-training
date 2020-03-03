class Customer {
    


    constructor( private _firstName: string, private _lastName: String)  {
       
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;

    }

    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }
}

// let myCustomer = new Customer();
// myCustomer.firstName = "pupu";
// myCustomer.lastName = "yan";

let myCustomer = new Customer("pupu","yan");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);