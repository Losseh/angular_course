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

