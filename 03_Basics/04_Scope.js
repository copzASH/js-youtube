if (true){
    const usr = "Anand "
    if (usr === "Anand "){
        const age = 22
        console.log(usr + age);
    }
    // console.log(age);       //error as the scope of age variable is only within nested if
}
// console.log(usr);       //error as the scope of usr is only within outer if


// ++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(8));     //no error even if the fn is used before initialisation

function addOne(num1){
    return num1 + 1
}

console.log(addOne(5))


// console.log(adding(6));      //this results in error

const adding = function(num2){
    return num2 + 10
}

console.log(adding(3))