const score = 100
console.log(score);

const balance = new Number(700)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 23.238478
console.log(otherNumber.toPrecision(4));

const otherNumber2 = 123.838478
console.log(otherNumber2.toPrecision(3));

const otherNumber3 = 1124.838478
console.log(otherNumber3.toPrecision(3));

const otherNumber4 = 12.838478
console.log(otherNumber4.toPrecision(1));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// maths---------------------------------------------------------------------

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.round(4.2));
console.log(Math.min(4, 2 , 5 , 5 ,67,0));
console.log(Math.max(4, 2 , 5 , 5 ,67,0));

console.log(Math.random());
console.log(Math.random()*10 );
console.log(Math.round(Math.random()*10));

const min = 10
const max = 20
console.log(Math.round(Math.random() * (max- min +1) + min));









