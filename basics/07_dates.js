//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

let createdDate = new Date("01-19-2022")
console.log(myCreatedDate.getTime());

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "long"
})