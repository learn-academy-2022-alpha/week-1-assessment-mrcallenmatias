// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// INPUT
// create a funtion that takes a parameter
// use conditional statement to set the degrees for each number
// if number is 42, then it is below boiling point
// if is it 212, the its is at boiling point
// 350 is condidered above boiling point

// OUTPUT
// create a console log and use function that's been created
// use the const temperature to use as parameters

const tempNumber = (temperature) => {
    if (temperature === 42) {
        return `${temperature} is below boiling point`
    } else if (temperature === 350) {
        return `${temperature} is above boiling point`
    } else {
        return `${temperature} is at boiling point`
    }
}
console.log(tempNumber(temp1));
console.log(tempNumber(temp2));
console.log(tempNumber(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// INPUT
// create a variable and use the method concat to combine two given arrays

// OUTPUT
// input console log to see the result the of combine array
// finnally, make another log and use .lenth to see the length of the combine array

var number = myNumbers1.concat(myNumbers2)
console.log(number);
console.log(number.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"

// INPUT
// use split method to turn string into array
// in array form, reverse will be accesible to use reversing the string in an array form
// then use join to turn array back to string

// OUPUT
// console log should show the final answer into the terminal

console.log(currentCohort.split("").reverse().join(""));


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd");
    }
}

// create a loop statement in order to go through an array
// then use conditional statement to know whether the number is odd or even
// by using % sign, conditional statement will be able to tell if its odd or even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const sub = (num1, num2) => {
    var minNumber = num1;
    var maxNnumber = num2;
    if (minNumber > num2) {
        minNumber = num2
        maxNnumber = num1
    }
    return maxNnumber - minNumber
}
console.log(sub(number1, number2))
console.log(sub(number3, number4))

// INPUT
// make s function that takes 2 parameter
// make 2 variables, one that is minimum and another a maximum number.
// use conditional statement to get bigger number 
// then subtract small number from bigger number
// OUTPUT
// the output should be both positive number since we make s function that makes smaller number be subtracted from bigger number.
