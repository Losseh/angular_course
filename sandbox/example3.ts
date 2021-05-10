import { Customerr, Person } from './customer';
import { Observable } from 'rxjs';

let x1: number = 5;

if (x1 > 10) {
    console.log('x1 is bigger than 10');
} else {
    console.log('x1 is not bigger than 10');
}


let numbers = [1, 2, 3, 10];

for (let n of numbers) { // for each element in array
    console.log(n);
}

// for (let n IN numbers) -> would be indexes of elements of array - do not do this!


// ENUMs
enum CustomerType {
    Standard,
    Premium = 7, // typescript enums are using integers
    VIP
}

function welcome_cust(name: string, type: CustomerType) {
    if (type === CustomerType.VIP) {
        console.log(`Welcome ${name}`);
    }
}

welcome_cust('Adrian', CustomerType.Standard);
welcome_cust('Łukasz', CustomerType.VIP);

console.log(CustomerType.VIP); // yields 8

console.log(CustomerType[CustomerType.Premium]);

let jan: Person = new Customerr('Jan', 123, 'Some Advisor');
console.log(jan.welcome())