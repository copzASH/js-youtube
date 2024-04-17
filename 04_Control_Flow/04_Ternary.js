// Null Coalescing Operator (??) - only for null and undefined
let var1
var1 = null ?? 10       //assigns 10 to var1
console.log(var1);

var1 = 14 ?? undefined      //assigns 14 to var1
console.log(var1);

var1 = null ?? 12 ?? 22     //12 i.e. the 1st acceptable value is assigned to var1
console.log(var1);



//Ternary Operator
// condition ? true statement : false statement

let val1 = 100
val1 <= 80 ? console.log("Less than 80") : console.log("More than 80");




//checking more than 2 conditions at the same time
// && operator  - even if one condition is not satisfied whole statement becomes false
var1 = 10
if (var1 == 10 && val1 == 100) {
    console.log("True");
}
else {
    console.log("False");
}


// || operator     - even id one condition is fulfilled whole statement is true
if (var1 == 10 || val1 == 23) {
    console.log("True");
}
else {
    console.log("False");
}