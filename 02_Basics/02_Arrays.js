let marvel = ["thor", "loki", "ironman"]
let dc = ["superman", "batman", "flash"]

/*
marvel.push(dc)     //this pushes the whole array as a new single element in marvel array

console.log(marvel);        //output : ["thor", "loki", "ironman", ["superman", "batman", "flash"]]
console.log(marvel[1]);     //output : loki
console.log(marvel[3][1])       //output : batman
*/

const both = marvel.concat(dc)      //adds 2 arrays and returns a new array
console.log(both);

//spread operator
//works same like concat but we can give more than 2 arrays
const new_both = [...marvel, ...dc]
console.log(new_both);

//flat function

const newARR = [1,2,3,[4,5,6],6,7,[4,5,6,7],8,9]
const modARR = newARR.flat(Infinity)       //this fn expands the array inside an array, 'Infinity' here is the depth which means to expand all nexted array
console.log(modARR);

console.log(Array.isArray('Himanshu'));     //this fn tells us if the given data type is array or not
console.log(Array.from('Himanshu'));        //this fn converts given parameter(if it is iterable) to array

console.log(Array.from({name:'Himanshu'}));     //passing an object as parameter returns an empty string
//this is because we didnt tell it to make an array on basis of keys or values


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));        //this fn returns a new array from a set of elements