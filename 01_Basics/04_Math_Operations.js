let value1 = 3
let negvalue1 = -value1
console.log(negvalue1);     //returns neative of value1

// Basic Maths operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);       //power operator
// console.log(5%2);        //modulus operator

let str1 = "Hello"
let str2 = " Himanshu"
console.log(str1 + str2);

// Problematic operations
console.log(1 + "1");
console.log("1" + 1);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// not recommended to use in actual coding
console.log(+true);     //output is 1
// console.log(ture+);      //results in error
console.log(+"");       //output is 0

// not recommended to use in actual coding
let num1, num2, num3
num1 = num2 = num3 = 3 + 2

// Postfix and Prefix increment/ decrement
let a = 100
a++     //postfix increment
console.log(++a);       //prefix increment