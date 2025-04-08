function sayMyName (/*parameters*/){
    console.log("Hiesenberg")
}

sayMyName(/* arguments*/);


// this function dose not return any thisn as console and return are diff things
// function add(num1,num2){
//     if(!isNaN(num1) && !isNaN(num2)){
//         console.log(num1+num2);
//     }
// }
add(3,4);


function add(num1,num2){
    if(!isNaN(num1) && !isNaN(num2)){
        var result = num1+num2;
    }
    return result;
}

const result = add(3,4);

// console.log("Result : " + result);

//adding multiple arguments into one parameter using rest operator

function cartSum(...num){
     console.log(num)
}
cartSum(34,45,56,7,68);


const obj = {

    name : "Vansh",
    age : 20,
}


function userDetails(anyobject){
    return `name is ${anyobject.name} and ages is ${anyobject.age}`
}

const print = userDetails(obj);

console.log(print);




