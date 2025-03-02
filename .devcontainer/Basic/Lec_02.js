// Operations
let value = 56
let negval = 45
console.log(value + negval)
console.log(value - negval)
console.log(value * negval)
console.log(value / negval)
console.log(value % negval)
console.log(value ** negval)
// concatination

let str1 = "Vansh"
let str2 = " Singh"

let str3 = str1 + str2

console.log(str3)

//complexcity of js

console.log("1" + 2)
// output 12
console.log("1" + 2 + 2) // if string is givein first then the entire conversion in  string
//output 122
console.log(1 + 2 + "2")
//output 32

console.log(+true) // wrong way to do this is true+

// comparision of datatypes

console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);
console.log(2==1);

// what happes when we compare 2 different data types
// all this comparsion should be avoided

console.log("2"<1)
console.log(null > 0)
console.log(null == 0) // this is not the regular == 
console.log(null >= 0) // here the null is converted to 0 here

console.log(undefined == 0)

// strict check
console.log("2" === 2)

// method for string

let name = new String("Vansh") ;
 

console.log(name.charAt(2))
console.log(name.indexOf("v"))
// substrin 
// slice
//trim remover all the space form the string
//replace allow to replace specific things from a stament using 2 para meter searach val and replace val
// split it splits entire statment using a spliter like space or - or anything and allows limmiter

