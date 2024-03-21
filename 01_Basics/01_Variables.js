//Variables and contants

const id = 12345      // value assigned will not be changed
let email = "abc@google.com"       
var pass = "123H"       // defining variables isnt done using var these days because of scoping issue in blocks and functions
city = "Pune"       //we can initialise variables like this also but it is not recommended
let state       //since no value is assigned to the state variable so it is marked as "undefined" when we print it

// id = 1234       // this will result in error because const value cant be changed once assigned
// console.log(id);

email = "xyz@google.com"
pass = "987u"
city = "Delhi"

/*
    console.log(email);     //instead of printing like this w ecan use table printing method
    console.log(pass);
*/

console.table([id, email, pass, city, state])      //this will print all variables within the parenthesis in a tabular format
