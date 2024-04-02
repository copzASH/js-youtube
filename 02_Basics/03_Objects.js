//symbol
const mySmbl = Symbol("key")
const mySmbl1 = Symbol("key22")


//defining an object as literals
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

console.log(jsUser.name);
console.log(jsUser['age']);
// console.log(jsUser.full name);       //this shows error
console.log(jsUser["full name"]);
console.log(jsUser.mySmbl);
console.log(typeof jsUser.mySmbl);
console.log(jsUser[mySmbl1]);       //this is how we access symbol from an object
console.log(typeof jsUser[mySmbl1]);


//overriding or changing values in an object
jsUser.name = "Anand"
//if we dont want anyone to change values in our obj then we can freeze the values in it
Object.freeze(jsUser)       //freeeze an object
jsUser.age = 18     //if we try to change values in object after freezing it then it wont change
console.log(jsUser);