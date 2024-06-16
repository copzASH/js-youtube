let score1 = 90
let score2 = 87

console.log(typeof score1)
console.log(typeof(score2))       // we can use either of them to check the type of a variable

let score3 = "50"       //this is string
console.log(typeof score3)
let value1 = Number(score3)      //here we typecast string to number
console.log(typeof value)

let score4 = "69a"
let value2 = Number(score4)
console.log(typeof value2)      //like above when we typecast here from string to number, the value we get in score2 is "NaN" i.e. "not a number" because score4 = "33a" isnt a number which can be typecasted perfectly though the typeof value2 is Number
console.log(value2)

// Conversion to number
// "33" => 33
// "33abj" => NaN
// null => 0
// true => 1; false => 0
// undefined => NaN

let isLoggedIn = 1
let boolLoggedIn = Boolean(isLoggedIn)
console.log(boolLoggedIn)       //output is true because it is a non zero value, only for zero its false
// from string to Boolean, if string is empty then after converting value would be false else for non empty string value would be true

// Conversion to Boolean
// 0 => false; 1 or non zero number => true
// "" => false; "non empty string" => true

