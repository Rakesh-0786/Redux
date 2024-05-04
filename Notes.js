/*

// Redux: Redux has mainly five functions (API):
1.Compose
2.createStore
3.bindActionCreator
4.Combine Reducer
5.Apply Middleware

Redux are made with the help of these five functions.


// now lets talk about these functions

1.Compose: this function takes multiple functions as an arguments and tells which one is printed .
for e.g
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

2.CreateStore:- Creates a Redux store that holds the complete state tree of your app.There should only be a single store in your app.
*/