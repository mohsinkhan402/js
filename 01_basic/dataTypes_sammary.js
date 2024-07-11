
//  Primitive

//   7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id == anotherId);  false
// console.log(id === anotherId); false

//  Reference (Non Peimitive)

// Object, Array, function

// const heros = ["shahrukh khan",'salman khan','akshey kumar'];    // array

// let myInfo = {
//     name: "mohsin",
//     age : "26"

// }
// const myFunction(){
//     console.log("Mohd Mohsin");
// }

// console.log(typeof(myFunction))  output:function


// ********************************************************* //

// Stack and Heap memory

// Stack (primitive)  & Heap (Non-Permitive)

let myName = "Mohd Mohsin";
let anotherName = myName;

anotherName = "Rahat";
// console.log(myName);
// console.log(anotherName);

let user1 = {
    email : "mohsinsk402@gmail.com",
    phone : "9718456260",
}

let user2 = user1;

user2.email = "mohsin@zeblearnindia.com";

console.log(user1);



