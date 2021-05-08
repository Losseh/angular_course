console.log('Hello world');

let x: number = 3;
let y: string;
let z: boolean;

y = "napis";

z = true;

console.log(x, y, z);

// tablice
let xs: number[] = [1, 2, 3];

let ys: Array<number> = [4, 5, 6];
ys[0] = 100;

let zs = [4, 5, 6, ...xs, ...ys]; // spread operator
console.log(zs);

// string interpolation
console.log(xs.length);
let g = 'aaa';
let gg = "aaa";
let ggg = `Tablica xs = ${xs}`;
console.log(ggg);

console.log(`xs[0] = ${xs[0] + 5}, zs[0] = ${zs[0]}`);

function welcome(name: string, age?: number, footSize: number = 39): string {
    return `Welcome ${name}`;
}

function welcome1(...names: string[]): string {
    return `Welcome ${names.join(', ')}`;
}

function basic_welcome(name: string) {
    return `Welcome ${name}`;
}

// console.log(welcome('Adrian', 30));
// console.log(welcome1('Adrian', 'Justyna', 'Tymon'));

let names: Array<string> = ['Adrian', 'Justyna', 'Tymon'];
// console.log(names.map(basic_welcome));

// anonymous functions / lambdas
// console.log(names.map((name: string) => `Welcome ${name}`));
console.log(names.map(name => `Welcome ${name}`));
