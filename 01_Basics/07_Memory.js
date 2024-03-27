// stack and heap memory 
// for all primitive data types stack memory is given i.e. the copy of a data is assigned

let score1 = 35
let score2 = score1     //value of score1 is copied to score2

score2 = 46     //since the data is copied so the change is only done in score2

console.log(score1);
console.log(score2);

// for all non primitive data types heap memory is given i.e. refernce to og value is given
let user1 = {
    email: "user1@gmail",
    upi: "user1@ybl"
}

let user2 = user1       //here the reference to the data is given instead of copying the data
user2.email = "2user@yahoo"     //since the reference is given so the change is made in the og value

console.log(user1.email);
console.log(user2.email);