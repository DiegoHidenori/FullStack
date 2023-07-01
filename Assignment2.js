"use strict";

// Function 1: Number of digits in an argument
console.log("This is function 1:");
function _findNumOfDigits(arg){
    const digitSearch = /\d/g;
    let numDigitsInner = 0;
    let string = arg.toString();
    if(string.match(digitSearch)){
        numDigitsInner = string.match(digitSearch).length;
    }
    console.log("The list of digits in string: " + string.match(digitSearch));
    console.log("The amount of digits in string: " + numDigitsInner);
    return numDigitsInner;
}
let stringNumDigits = _findNumOfDigits("aoidfjo2093 23090faodsk");


// Function 2: Surplus function
console.log("\n" + "This is function 2:");
function _surplus(str){
    function innerFunction(){
        return str;
    }
    return innerFunction;
}
let stringReturnsString = _surplus("Hello darkness my old friend");
console.log(stringReturnsString());


// Function 3: String with numbers
console.log("\n" + "This is function 3:");
function _strNumbers(arr){
    let withNumbers = [];
    const digitSearch = /\d/;
    for(let listNum = 0; listNum < arr.length; listNum++){
        let arrayNum = digitSearch.test(arr[listNum]);
        if(arrayNum){
            withNumbers.push(arr[listNum]);
        }
    }
    return withNumbers;
}
const functionList = ["donk3ys63", "43el3phants", "dogsandcats"];
const functionResults = _strNumbers(functionList);
console.log("Final arrays are: ", functionResults);


// Function 4: Class grading
console.log("\n" + "This is function 4:");
function _determineClassGrading(arr){
    let passingCounter = 0;
    let failingCounter = 0;
    let totalGrades = 0;
    for(let c = 0; c < arr.length; c++){
        totalGrades += arr[c];
        if(arr[c] >= 50){
            passingCounter++;
        }
        else{
            failingCounter++;
        }
    }
    const gradeAverage = totalGrades / arr.length;
    const gradeAverageRounded = parseFloat(gradeAverage.toFixed(1));
    console.log("Passing grades: ", passingCounter);
    console.log("Failing grades: ", failingCounter);
    console.log("Average grade: ", gradeAverageRounded);
    return [passingCounter, failingCounter, gradeAverageRounded];
}
const classGrades = [40, 55, 64, 70, 80, 90, 100];
const function4 = _determineClassGrading(classGrades);
console.log(function4);


// Function 5: Move capital letters
console.log("\n" + "This is function 5:");
const _moveCapitalLetters = (str) => {
    const upperCaseLetters = [];
    const lowerCaseLetters = [];
    for(let c = 0; c < str.length; c++){
        if(str[c] === str[c].toUpperCase()){
            upperCaseLetters.push(str[c]);
        }
        else{
            lowerCaseLetters.push(str[c]);
        }
    }
    return upperCaseLetters.join('') + lowerCaseLetters.join('');
};
