const name = "hartsh";
const repoCount = 5;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Harsh')

console.log(gameName [3]);

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5, 5);
console.log(anotherString);

const newStringOne = "      harsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('-', '%'))