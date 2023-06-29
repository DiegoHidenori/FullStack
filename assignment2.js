"use strict";

//Function 1: Number of digits in an argument
console.log("This is function 1:");
const digitSearch = /\d/g;
let stringNumDigits;
function stringDigits(arg){
    let numDigitsInner = 0;
    let string = arg.toString();
    if(string.match(digitSearch)){
        numDigitsInner = string.match(digitSearch).length;
    }
    console.log("The list of digits in string: " + string.match(digitSearch));
    console.log("The amount of digits in string: " + numDigitsInner);
    return numDigitsInner;
}
stringNumDigits = stringDigits("asdfasdfa1234124353");

// Function 2: Surplus function
console.log("\n" + "This is function 2:");
let stringReturnsString;
function returnString(string){
    function innerFunction(){
        let stringInner = '\"\"';
        if(string){
            stringInner = string;
        }
        return stringInner;
    }
    console.log(innerFunction());
    return innerFunction();
}
stringReturnsString = returnString("");

// Function 3: String with numbers
console.log("\n" + "This is function 3:");
let withNumbers = [];
function stringArray(array){
    for(let listNum = 0; listNum < array.length; listNum++){
        let arrayNum = array[listNum].match(digitSearch);
        if(arrayNum !== null){
            withNumbers.push(array[listNum]);
        }
    }
    return withNumbers;
}
const functionList = ["chewba123cae", "agh4343", "Poais12309", "qwer12"];
const functionResults = stringArray(functionList);
console.log("Final arrays are: ", functionResults);

//Function 4: 
