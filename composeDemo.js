import {compose} from "redux";

function removeSpaces(string){
    return string.split(" ").join("");
}
console.log(removeSpaces("ab cd ef"));

function repeatString(string){
    // return string + string;
    return string.repeat(2);
} 
console.log(repeatString("abc"));

function convertToUpper(string){
    return string.toUpperCase();
}
console.log(convertToUpper("abc"));

const input="abc def ghi";

// const output=convertToUpper(repeatString(removeSpaces(input)));
// console.log(output);

const composeFunction=compose(removeSpaces, repeatString,convertToUpper);
// console.log(composeFunction) //this give a anonymous function

console.log(composeFunction(input));