//there are different formats of dates

let d1 = new Date()
console.log(d1);        //not readable format
console.log(d1.toString());     //readable
console.log(d1.toDateString());
console.log(d1.toDateString());
console.log(d1.toLocaleString());
console.log(d1.toJSON());
console.log(d1.toLocaleDateString());

console.log(typeof d1);

//declaring a specific date
let d2 = new Date(2021, 0, 12)
console.log(d2.toDateString());     //months no. are one less than their actual no just like indexing in array

//date with time
let d3 = new Date(2020, 3, 23, 14,45)
console.log(d3.toString());     //this format also shows time


//date in mili second
let dt1 = Date.now()
console.log(dt1);

//we can convert the date into mili second
//we do this so that we can compare dates with exact time as milisecinds will give more accurate result
console.log(d3.getTime());