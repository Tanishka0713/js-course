const name = "Tanishka"
const repocount = 2
// console.log(name +" "+ repocount +" "+ "value");    //old method

//new method - `abcd ${}`
console.log(`hello my name is ${name} and i have ${repocount} repository`);


const getName = new String('tanishka-ta')
console.log(getName[2]);
console.log(getName.__proto__);
console.log(getName.toUpperCase());
console.log(getName.length);
console.log(getName.charAt(3));
console.log(getName.indexOf('a'));

const value = getName.substring(0, 4)
console.log(value);

const newValue = getName.slice(0, 4)
console.log(newValue);

//trim => used to remove the extra space
const newString = "  tanishka    "
console.log(newString);
console.log(newString.trim());


//replace
const url = "https://tanishka.com/tanishka%20ahire"
console.log(url.replace("%20", '-'));

console.log(url.includes('tanishka'));

console.log(getName.split('-'));