// when we write code, the whole code shouldnt run in one go
// instead it should run according to control flows (conditional based)
// eg. if user logs in, the login code should run, whereas if user l0gs out, log out code should run

// if control flow
//different comparisons : < , > , <= , >= , == , != , === , !==
if (2 == "2") {     // == only checks the value
    console.log('Executed');
}

if (2 === '2') {        // === checks value and data type
    console.log('Not Executed');
}

if (3 != 2) {
    console.log('Not equal condition');
}

if (3 !== 3) {
    console.log('Strict not equal');
}


//if else
let temp = 35
if (temp < 30) {
    console.log('less then 30');
}
else {
    console.log('more than 30');
}



//scope of diff variables
const score = 200
if (score > 100) {
    var power = 'fly'       //if var is used it is accessible from outside also
    console.log(`User power: ${power}`);
}
console.log(`Power: ${power}`);     //calling power var from ooutsid scope

// const score = 200
// if (score > 100) {
//     var power = 'fly'       //if let or const is used it is not accessible from outside scope
//     console.log(`User power: ${power}`);
// }
// console.log(`Power: ${power}`);     //calling power variable from ooutsid scope results in error


//short hand notation
const balance = 1000
if (balance == 1000) console.log('Short hand');
