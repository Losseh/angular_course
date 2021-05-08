interface Customer {
    name: string;
    age?: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
}

function welcome(customer: Customer): string {
    return `Welcome ${customer.name}`;
}

console.log(welcome({
    name: 'Adrian',
    address: {
        street: 'Leszczynowa',
        city: 'Lubin'
    }
}));