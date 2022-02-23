// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Correct,in legth, it starts with 1 when counting but with index, it starts with 0, so if index was asked, the answer is 9.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Correct, by counting index, you start with 0, so on tihs example, index 0 i H, and index 4 is 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Correct, this is the same as number 2, except, it uses variable to replace the index.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:["SATURDAY", "SUNDAY"]
// b) Verify and explain: Incorrect, I realized that you can use touppsercase method on array, I would have to you split method, to be able to use uppercase then join to get it back to array.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: error
// b) Verify and explain: Incorrect, typeoff is asking what of cariable is the length of datatype which is a number, I was thinking of a whole array which in incorrect.
