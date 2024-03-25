// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

let score1 = 30
let score2 = 80.42

const isLoggedIn = false
const compare = null

let user1email      //this assigns "undefined" to user1email
let user2email = undefined      //upper statement and this statement both are same

const id1 = Symbol("12")
const id2 = Symbol("12")
console.log(id1 === id2);       //false
// even though id1 and id2 are symbols data type with same value "12", their id is different

let bigNo = 23443251234545n     //when we add n after a no. it is declared as bigInt
console.log(typeof bigNo);

// Reference(Non Primitive)
// Array, Objects, Functions
// when we print typeof non premitive datatypes the result is always object
let marvel = ["loki", "thor", "wanda", "vision"]        //array(object)

let info = {
    name : "himanshu",
    age : 22
}       //object, when defined b/w curly braces "{}" it is an object

const fn = function(){
    console.log("Hello World");
}       //function stored in a variable

console.log(typeof info);