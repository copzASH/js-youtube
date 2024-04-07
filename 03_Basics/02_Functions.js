//sometimes we dont know how many arguments we will recieve so we cant dcide how many parametres we should assign to the fn
function cartItems(num1){
    return num1
}

console.log(cartItems(2));      //this is normal calling where only 1 value is passed
console.log(cartItems(200,120,2100));       //here we pass more than required parameters, so only 1st value is returned and rest are discarded

//so to overcome this we use rest operator(...) {syntax same as spread operator}

function cartItems1(...num1){
    return num1
}

console.log(cartItems1(200,120,2100));      //now this will return an array with all the parameters wrapped in it, and we can use array operations on that aaray

function cartItems2(val1, val2, ...num1){
    return num1
}

console.log(cartItems2(21, 2213, 2102, 11202, 100));        //here 21 -> val1, 2213 -> val2 and rest vales are assigned to num1


//passing object in a fn
const cart = {
    item : "watch",
    price : 499
}

function callObj(anyObj){
    console.log(`Item name : ${anyObj.item} and Item price : ${anyObj.price}`);
    //this treats anyObj as an object and calles its property named item and price using dot(.) operator
}

callObj(cart);       //here we pass cart obj to the fn
//but here we passed an already made obj to the fn
//we can also write an obj defination while calling the fn as its parameter
callObj(
    {                               //creating obj while calling the fn
        item : "shirt",
        price : 350
    }
)



//passing an array to the fn
const myArr = [100,200,300,400]

function callArray(arr){
    console.log(arr);       //console.log(arr[2]);
    //we can either return the whole array or we can just return a specific value from the array
}

callArray(myArr)        //passing an already defined array
//just like obj we can pass full array as a parameter
callArray([900,800,700])