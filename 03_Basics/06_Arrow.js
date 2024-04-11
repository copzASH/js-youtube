//basic syntax for arrow fn
// () => {}

//we can hold it in a variable
//const addTwo = () => {}

//defining fn using arrow fn
const add =  (num1, num2) => {
    return num1 + num2
}

console.log(add(3,2))


//implicit return
//if there is only one line code defination for a fn we can do it without using "return" keyword and in the same line
const add1 = (num1, num2) => num1 + num2    //here we can either use parenthesis "()" or not
//const add1 = (num1, num2) => (num1 + num2)
//if we use curly braces "{}" we need to write return but if use parenthesis, we dont need return

console.log(add1(7,8))

//if we need to return an obj in a fn we must use {}
const obj = () => ({username:"Anand"})
//const obj = () => {return {username:"Anand"}}     //or we can use this syntax

console.log(obj());