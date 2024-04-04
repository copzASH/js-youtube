//when we define an object using constructor it is defined as singgleton obj
//defining obj as singleton 
const tinderUsr = new Object()

tinderUsr.id = 123
tinderUsr.name = "Sam"
tinderUsr.isLoggedIn = false

console.log(tinderUsr);

//nested object
const usr = {
    email : "email@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Himanshu",
            lastname : "Rathi"
        }
    }
}
console.log(usr.fullname.userfullname);     //we can access any object like this
console.log(usr.fullname.userfullname.firstname);


//combining objects
const ob1 = { 1: 'a', 2: 'b'}
const ob2 = { 3: 'c', 4: 'd'}

const ob3 = {ob1,ob2}       //if we do like this, then it akes object in object
console.log(ob3);

const ob4 = Object.assign(ob1,ob2)      //here also is a problem
//here ob1 acts as a target so ob1 becomes equal to ob1+ob2 and then this value is assigned to ob4
//so this line also changes ob1, which we dont want

console.log(ob1);
console.log(ob4);

const ob6 ={1: 'aodn', 6 :'egjkev'}
//instead we do like this to avoid changing values in ob1
const ob5 = Object.assign({}, ob6, ob2)     //here {} acts as the target object which is modified and then its value iss assigned to ob5
console.log(ob5);

//combinig objects using spread operator(mostly used)
const ob7 = {...ob1, ...ob2}
console.log(ob7);


//when we get values from databse its mostly an array of objects
/*eg: 
users = [
    {usr1},
    {usr2}
]
*/
//array of objects
const user = [
    {
        email: '1eamil@gamil.com',
        id: 1
    },
    {
        email: '2email@icloud.com',
        id: 2
    },
    {
        email: '3email@yahoo.com',
        id: 3
    }
]

//accessing value from an array of objects
console.log(user[1].email);     //since user is an array but user[1] is obj, so we can use obj operations on elements of user


//to print keys of an obj
console.log(Object.keys(tinderUsr));        //this returns an array of keys
//accessing values
console.log(Object.values(tinderUsr));

//we cann also check is an obj has a property or not
console.log(tinderUsr.hasOwnProperty('isLoggedIn'));
console.log(tinderUsr.hasOwnProperty('isLogged'));