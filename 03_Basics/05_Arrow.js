const user = {
    username : "Anand",
    age : 22,

    welcomeMsg : function(){
        // console.log(`${user}, welcome to website`);     //when we want to refer to the current context we use 'this' keyword
        // for this scope(function) current context is related to this object(user)
        console.log(`${this.username}, welcome to website`);

        console.log(this);      //this will print the whole current context(all values of this obj)
    }
}

user.welcomeMsg()
user.username = "Himanshu"
user.welcomeMsg()       //since we changed the current context username to "Himanshu" so the output is now changed
/*
Output is :
    Himanshu, welcome to website
    { username: 'Himanshu', age: 22, welcomeMsg: [Function: welcomeMsg] }
since we changed current context to Himanshu, so all the values are related to it

*/

console.log(this);      //here we are talking about the global, and since there is no context in the global so we get empty obj
/*
if we use "console.log(this);" in the inspect of the browser there the global obj is "Window"
and we can capture the various events of Window object there 
*/


function coffee(){
    let type = "latte"
    console.log(this);
    console.log(this.type);
}

coffee()        //when we define this in a function instead of a obj we get so many values
//but if we try to access the "type" of coffee function using dot(.) operator we cant access it unlike in obj


//definig fn normally
const coffee1 = function(){
    let type = "Cold"
    console.log(this.type);
}

//calling upper fn(coffee1)
coffee1()       //here also we cant access type using dot and this


//definig a fn using arrow function
const coffee2 = () =>{
    let type = "Hot"
    console.log(this.type);
}

//calling coffee2 fn
coffee2()       //here also we cant access type using dot and this

