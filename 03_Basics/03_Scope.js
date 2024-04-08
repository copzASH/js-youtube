let a=10
const b=10
var c=30

//normal behaviour of scoping
console.log(a);
console.log(b);
console.log(c);

if(true){
    let d=90
    const e=80
    var f=70
}

//now if try to print d and e outside if sccope it will result in error, but not for f
console.log(f);
//this means that var data type has scoping issue

var as=210

if(true){
    as=33
}

console.log(as);        //even though the change made in 'as' variable should only be effective inside the scope of if 
//but here the output is 33 which contradicts the scoping of variable in a block



function one(){
    let name ="Anand"
    function two(){
        let age = 22
        console.log(name);
    }

    // console.log(age);        //error, since scope of age ends with the end of fun two so we cant call it outside the two fun

    two()       //calling two fn, since fn two is inside fn one so we can call it 
}

one()       //calling fn one