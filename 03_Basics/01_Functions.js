//Function - wrapping up a piece of code into a package so that we can use that package anywhere we need it

// console.log("A");
// console.log("N");
// console.log("A");
// console.log("N");
// console.log("D");

//now if we are told to print this 5 times we need to write it 4 more times 
//but if we use function here we can minmise the code

function myName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    
}

//now we can call the fn myName whenever we need to print the name

myName()

myName      // this is the reference of the function, it wont print anything
//if we want the function to work ar per its defination then we need to write it along with parentheis "()"

//adding 2 no. using fn
//this fn doesnt return anything so we cant store the result produced by this fn
function add1(no1, no2){        //these no1, no2 are called parameters and the values we pass during call of fn are called arguments
    console.log(no1 + no2);
}

//this is a return type fn 
function add2(no1, no2){
    // let ans = no1 + no2
    // return ans
    return (no1 + no2)
    console.log('ANAND');       //this line wont execute because the piece of code written after return is not accessible
}

//calling fn
add1(2,4)       //since its a parameterised fn, we need to pass arguments

//since JS define the type of var at the time of code execution so user can pass even string in add fn
add1(2,'3')
add1(2, 'a')
//to prevent this we can use if conditions

let ans = add2(2,6)     //since add2 fn returns some value, we can store it and use it later
console.log(ans);


function loginMsg(usr){
    return `${usr} just logged in`
}

loginMsg("Himanshu")        //this wont print anything as the fn loginMsg only returns value and doesnt print it
console.log(loginMsg("Himanshu"));



function loginMsg1(usr){
    if(usr === undefined){      //if(!usr)          //the same condition can also be written like this
        console.log('Please enter a username');
        return
    }
    return `${usr} just logged in`
}

//to completely avoid this situation we can pass some default value to the parameter
function loginMsg2(usr="Abc"){
    // if(usr === undefined){                           //if we pass some defalut value we dont need to write this if condition
    //     console.log('Please enter a username');
    //     return
    // }
    return `${usr} just logged in`
}

console.log(loginMsg2());