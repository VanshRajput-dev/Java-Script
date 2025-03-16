//Date and time
// Date object is a single moment in time in a platform-independent format

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// we can add specfic date and time that we want to display as well

let myCreatedDate = new Date(2023,0,23); // in js the months starts from o
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

// there are multiple ways of displaying dates
// geeting the current date

let myTime = Date.now();
console.log(myTime);
console.log(Math.floor(myCreatedDate.getTime()/10000));


// we can get specifi day month as we from date 

console.log(myDate.getMonth()+1)
// one of the most importan method

myDate.toLocaleString('default',{
    weekday: "long"
})