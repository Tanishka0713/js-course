// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 13)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2024, 1, 13, 1, 5)
// console.log(myCreatedDate.toLocaleString());


let mycreatedDate = new Date("01-13-2024")
console.log(mycreatedDate.toLocaleString());

let myStamp = Date.now()
console.log(myStamp);
console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());


console.log(`Today's date is ${newDate.getDate()} `)