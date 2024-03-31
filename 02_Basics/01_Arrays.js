//unlinke other languages, a single array in js can have different datatypes

let arr1 = [2,1,3,22,11,true,"himanshu"]
console.log(arr1);

//js arrays are resizable

let arr2 = new Array(1,2,3,4,5,6)      //we can also define arrays like this

//accessing a specific element of an array
console.log(arr2[2]);

//array methods

arr2.push(7,8)        //adds new element(one or more elements) at the end of the array
arr2.pop()      //deletes the last last element from array
arr2.unshift(9,10)     //adds new elements in the beginning of array
arr2.shift()        //removes 1st element from array
console.log(arr2);

console.log(arr2.includes(12))        //tells whether specified element is present on array or not, returns boolean
console.log(arr2.indexOf(11))     //returns the index of specified element, returns -1 if not available


let newarr = arr2.join()        //joins the arrays and converts it into string
console.log(newarr);
console.log(typeof newarr);


//slice and splice
let myn1 = [0,1,2,3,4,5,6,7]

console.log(myn1.slice(1,4));       //slice prints the elements from the specified range, it doesnt affect the og array
console.log("A ", myn1);

console.log(myn1.splice(1,4));      //it prints the elements as well as deletes those elements from the og array
console.log("B ", myn1);
