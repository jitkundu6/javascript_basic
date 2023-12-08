// This is our first Javascipt code.
console.log("Hello World!");
console.log('Hi');
// To execute the code in node, open terminal and type "node index.js"


// var name; // before ES6
let name = 'SK';    
console.log(name);

// Variables: 
// Can't be reserved keyword,
// Should be meaningful,
// Can't start with numbers (Ex: 1name),
// Can't contain hyphen '-' or space ' ',
// As per JS convention variable name should follow camelCase notation (Ex: firstName),
// Variables are case sensative (Ex: a, A),

//let firstName = 'Subhajit', lastName = 'Kundu';
let firstName = 'Subhajit';
let lastName = 'Kundu';


// CONSTANTS:
let p = 55.5;
const r = 0.3;
// r = 0.5;  // Constant can't be reassigned
p = 65.5
console.log(r);
console.log(p);


// Primitive / Value Types  & Non-Primitive / Reference Types

// Primitive Types: String, Number, Boolean, undefined, null & 
// symbol (from Es6)

let n = 'SK'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let name1; // undefined
let name2 = null; // null object

console.log(typeof n);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof name1);
console.log(typeof name2);



// Dynamic Typing
let x = 'SK'; // String Literal
console.log("typeof x = ", typeof x);
x = 30; // Number Literal
console.log("typeof x = ", typeof x);


// Reference Types: Object, Array, Function

// Object:
let person = {
    name: 'SK',
    age: 30,
}

console.log("person = ", person);
console.log("typeof person = ", typeof person);

// Dot notation
person.name = "S"
console.log("person name = ", person.name);

// Bracket notation
person['name'] = "S1"
console.log("person name = ", person['name']);

let selection = 'name'
person[selection] = "S2"
console.log("person name = ", person['name']);


// Array: is a data structure in JS to store a list of heterogeneous items
let colors = ['red', 5];    // [];
console.log("colors = ", colors);
console.log("typeof colors = ", typeof colors);
console.log("colors[0] = ", colors[0]);
console.log("typeof colors[0] = ", typeof colors[0]);
console.log("colors[1] = ", colors[1]);
console.log("typeof colors[1] = ", typeof colors[1]);

colors[3] = 5.5
console.log("colors[3] = ", colors[3]);
console.log("typeof colors[3] = ", typeof colors[3]);

console.log("colors = ", colors); // Length of Array is Dynamic 
console.log("colors length = ", colors.length); 

console.log("colors[2] = ", colors[2]);
console.log("typeof colors[2] = ", typeof colors[2]);
