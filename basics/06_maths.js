//************** NUMBERS ************/

const score = 1000
console.log(score);

const balance = new Number(800);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 24.3547
console.log(otherNumber.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//

console.log(Math.random())
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min+ 1)))