//symbol
const mySmbl = Symbol("key")
const mySmbl1 = Symbol("key22")


//defining an object
const jsUser = {
    name : "Himanshu",
    "full name" : "Himanshu Rathi",     //we can not access this using dot(.) operator
    age : 22,
    mySmbl : "myKey1",      //if we define symbol like this then it becomes a string, so wrong method 
    [mySmbl1] : "yourKey11",        //this is the ccorrect method to define a symbol in an object
    city : "pune",
    isLoggedIn : false,
    logInDays : ['monday', 'friday']
}

jsUser.greet = function(){
    console.log("Yoo, whats up");
}

console.log(jsUser.greet);
console.log(jsUser.greet());

jsUser.greet2 = function(){
    console.log(`Welcome, ${this.name}`);       //when we want reference to the same obj then we use this keyword
}

console.log(jsUser.greet2());