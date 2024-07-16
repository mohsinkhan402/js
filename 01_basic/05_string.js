const name = "Mohd Mohsin";
const  streetNo = 20;
// console.log(name + " live in street no. " + streetNo);  not recommended  use back ticks

//string interpolation

// console.log(`My name is ${name} and i live on street no. ${streetNo}`);

const newName = new String('mohsin');
// console.log(newName);
// console.log(newName.__proto__); {}
// console.log(newName.length); 8
// console.log(newName.toUpperCase()); MOHSIN
// console.log(newName.charAt(4));  i
// console.log(newName.indexOf('s'));   3

const newString = newName.substring(0,3);

// console.log(newString); moh 
const anotherString = newName.slice(0,3);  
const anotherStringN = newName.slice(-4,4);     // can enter -ve value

// console.log(anotherString);  moh 
// console.log(anotherStringN); hs

const newStringOne = "  mohd     mohsin     ";

// console.log(newStringOne);
// console.log(newStringOne.trim()); remove all whitespace from start and end 

const url = "https://zeblearnindia.com/training/dba-mainframe%20program";

// console.log(url.replace('%20','-'));
console.log(url.includes('trainino'));