//some values are already true and dont need any comparison, same is the case with false values

// some falsy values
// false    - this false keyword is false on its own
// 0 , -0   - Integer 0 and -0 are falsy
// BigInt 0n    - BigInt are written with a "n" at the end, so 0n is a falsy value
// ""   - empty string
// null , undefined , NaN  - these special data types are false on their own

// some truthy values
// "0" , "false" , " "  - since its written in a strinf its a truthy value
// []   - empty array is a truthy value
// {}   - empty obj is truthy
// function(){}     - empty fn is truthy

const usrEmail1 = ''

if (usrEmail1) {
    console.log('Got User Email');
}
else {
    console.log('No Email');
}



// method to check if array is empty or not
const usrEmail2 = []
if (usrEmail2.length === 0) {
    console.log("Empty array");
}
else {
    console.log("Non empty array");
}


// checking if an obj is empty or not
const obj = {}
if (Object.keys(obj).length === 0) {      //Object.keys() fn returns array of the keys of the obj we pass as the argument, and on array we can use length method
    console.log('Empty obj');
}
else {
    console.log('Non empty obj');
}


//some imp confusing comparisons
// false == 0   //output is true
//false == ''   //output is true
//0 == ''   //output is true