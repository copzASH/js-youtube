const name = "Himanshu"
let repos = 10

console.log(name + " has " + repos + " repos");     //old way of concatinating strings

console.log(`Hello, my name is ${name.toUpperCase()} and i have ${repos} repos`);     //mordern way, also called string interpollation
//we can even use methods here, like we used "toUpperCase()" function


console.log(name[0]);       //we can access any character of the string just like in arrays

let str = new String("Anand")     // we can also define string using this method

console.log(str.length);
console.log(str.toUpperCase());       //converts everything to uppercase, but this doesnt affect our original string
console.log(str);
str = str.toUpperCase();        //now the string has been converted to upper case and this change is done in the original data
console.log(str);



let str2 = "New-string"

console.log(str2.length);
console.log(str2.charAt(2));        //this fn tells which characcter is present at the given index
console.log(str2.indexOf("n"));     //this would tell the index of the character 
//if characters repeat then the index at which the character appears first is printed

let cut = str2.substring(2,5)       //slices the string from the starting index to one index before the ending index
console.log(cut);
// in substring fn we cant start from -ve 

console.log(str2.slice(-3,10));     //in slice function we can start from -ve



let str3 = "    Rathi    "
console.log(str3.trim());       //removes the unwanted whitespaces and line terminator("\n")



let url = "www.google.com//himanshu rathi"
console.log(url.replace(" ","-"));      //replace an character, or word with new one
console.log(url.includes("www"));       //check whether the requested character or word is present in string or not, output is boolean



let str4 = "my-name-is-copzASH"
console.log(str4.split("-"));       //splits the given string into array of substrings, the division is done on the basis of input
