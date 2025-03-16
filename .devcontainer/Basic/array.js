const myArray = [1, 2, 3, 4, 5,6,7,8];
console.log(myArray);


// // methods 0f array
// myArray.push(6);//push
// myArray.push(7);
// myArray.push(8);
// myArray.push(9);
// myArray.pop(); // removes the last element 
// myArray.unshift(10);// add an element in first index of the array menain we need to shift all the index of value
// myArray.shift()// removes the first element from the array
// myArray.includes(4)// checke if the element exist in the array
// myArray.indexOf(5)//return -1 if the elemnt doses not exists
// console.log(myArray);


const myArray2 = [1, 2, 3, 4, 5,6,7];
// const myArray = [1, 2, 3, 4, 5,6,7,8];
// const newarray = myArray2.join()// turn the array into string
// console.log(newarray);
const ar = myArray.slice(1,4);// what we under stand here is the even tho slice and splice perform the same oopertion with diffretn index 
console.log("A " + ar);// the slice methond dose not change the main array but the splice method change s the main array
console.log(myArray)
const arr = myArray.splice(1,4);
console.log("B " + arr);
console.log(myArray)


const arrray1 = ["vansh","Raj","sushil"];
const arrray2 = [23,45,67];

const arrray3 = arrray1.concat(arrray2);
console.log(arrray3); // this the best way to merege array insted of using push to add an existing array to into another existing array
// this merges the  2 array and 
// another way of doing this is usien spread operator

const arrray4 = [...arrray1,...arrray2];
console.log(arrray4);
