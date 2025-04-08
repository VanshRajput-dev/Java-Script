// there ar 2 ways of creating an object 
// using a litral or a constructor there is no such diffrence other than singleton

// const JsUser = {}// object literal
// Object.create()// constuctor

// we Will foucus on object literal

// this is a symbol datatyepe

const mySYM1 = Symbol("VAn");


const JsUser = {
    name : "Vansh",
    [mySYM1] : "VAN",// we can not use this like this as this will chage the dat
    age : 45,
    work : "No",
    isLoggedin : false
};

// to access the objec t we can use 2 ways but the second one is right

console.log(JsUser.age); // this is wrong as using the method we cannot use symbol datatype

console.log(JsUser["age"])
console.log(typeof JsUser[mySYM1]);
// we can also make the object const by freezing it 

// Object.freeze(JsUser);// this will freeze the object

// Function 
// Function works same as a var in js


JsUser.greetins = function() {
    console.log(`hello js user : ${this.name}`);

}
console.log(JsUser.greetins());


// now lets merege multiple objects

const newObjec = {
    1 : "A",
     2 : "b",
      3 : "c",
       4 : "d",
}

const newObjec1 = {
    5 : "e",
     6 : "f",
      7 : "g",
       8 : "h",
}

const newObjec2 = {...newObjec,...newObjec1};
console.log(newObjec2)
//destructurcuring the data

const obj ={
    name : "Vansh",
    age : 23,
}

const {name :N} = obj;
console.log(N);

