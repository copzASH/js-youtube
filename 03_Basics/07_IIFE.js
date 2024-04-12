// Immediately Invoked Function Expression (IIFE)
//suppose we wrote a fn and we want to immediately execute it

const a = 12;

//explicitly calling a fn
function chai(){
    const a = 5
    console.log(a);
}
chai();     //fn call
//before calling an IIFE we need to end the line with ; so that editor knows from where the IIFE starts
//eding also should also be done with ; to tell editor where to stop the context of the IIFE


//IIFE
(function coffee(){
    console.log(`DB CONNECTED`);
}) ();

// 1st parenthesis acts as a fn defination
// 2nd parenthesis acts as a fn call        
// (fn dedination)()


// IIFE with arrow fn
( () => {
    console.log(`DB Disconnectd`);
}) ();


// Parameterised IIFE
( (name) => {
    console.log(`Hello ${name}`);
} ) ('Anand');
//in parameterised IIFE we pass the value in the 2nd parenthesis i.e. the fn call praenthesis


