"use strict";       //used to tell the browser to treat the js code as newer version of JS, but now a days this is by default

// alert("Hello")       //this would work fine in the console of browser but not in CLI node js

//in JS, writing ";" after every line isnt compulsory, its upto us to write it or not


//Data Types:
//number : range from  -((2^53) − 1) to  (2^53) − 1 
//bigint : bigger numbers than the above "number" data type
//string : anything written b/w "" or ''
//null : its a stand alone value e.g. let a = null
//undefined : when no value is assinged to a variable
//symbol : it is used to define the uniqueness between the components

//objects

const id = 12345
let email = "abc@google.com"       
var pass = "123H"
let city = "Pune"
let state

console.log(typeof "abc")
console.log(typeof id)
console.log(typeof null)        //output is : object
console.log(typeof undefined)       //output is : undefined