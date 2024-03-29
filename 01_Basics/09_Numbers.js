const score1 = 90
console.log(score1);        //this is a no.(int)

const score2 = new Number(123)      //this is also a no. but here it explicitly defines that this is a no.
console.log(score2);        

console.log(score2.toString().length);        //after converting it into a string we can use string operations on it
console.log(score1.toString().length);

console.log(score1.toFixed(2));     //tells us how many digits will be present after decimal, takes parameter for the decimal count


const cost = 234.7682
console.log(cost.toPrecision(4));       //kind of round off but its kinda tricky if the precision parameter is less than no. of digits before decimal. And the retuen type is string
console.log(cost.toPrecision(3));
console.log(cost.toPrecision(2));


const cost2 = 1000000
console.log(cost2.toLocaleString());        //returns no. with commas, by default international standard
console.log(cost2.toLocaleString("en-IN"));        //we can explicitly define indian standard


console.log(Number.MIN_VALUE);      //tells us the min value foe number data type
console.log(Number.MAX_VALUE);      //tells max value


/////////////////////////////////////////////     maths          /////////////////////////////////////

console.log(Math.abs(-3));      //converts -ve value to +ve, if its +ve then no change
console.log(Math.round(3.6));       //basic round off function
console.log(Math.ceil(2.1));
console.log(Math.floor(3.9));

console.log(Math.max(2,4,1,7,5,9));     //tells max no. from an array
console.log(Math.min(4,2,3,8,5,1,9,0));     //tells min no. from array


//most common used math function is random
console.log(Math.random());     //the output of random function is always b/w 0 and 1
console.log(Math.random() * 10);        //we can multiply it by 10 to get no. greater than 1, here also is a probability of getting no. starting with 0.0
console.log((Math.random() * 10) + 1);      //we can add 1 to avoid getting 0 even after multiplying with 10
//the value we get are in decimals so to avoid it we can use floor function
console.log(Math.floor((Math.random() * 10) + 1));

// now if we are given a range b/w which we need to find the random no. 

const min = 10;
const max = 20;
//formula for this is 
console.log(Math.floor(Math.random() * (max - min + 1)) + min );