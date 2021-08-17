/*
 ? ES6 provided a new operator called spread operator
 ? that consists of three dots (...)

  * A spread operator allows us to spread our elements
  * on an iteralble object such as an array 
*/

const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)

/*
    ? ES6 also has three dots (...) which is rest parameter
*/

function display(a,b, ...arguments){
    console.log(arguments)
}

display(1,2,3,4,5)

/*
    ? spread operator - unpacks elements
    ? rest operator - packs elements into an array
*/

// ? Constructing array literal

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// ? Concatinating two arrays

let numbers =[1,2]
let moreNumbers =[3,4]
let allNumbers = [...numbers,...moreNumbers]
console.log(allNumbers)

// ? Copying an array

let scores = [80,70,90]
let copiedScores = [...scores]
console.log(copiedScores)

// ? Spread Operator and String

let newChars =['A', ...'BCD', ...'EF']
console.log(newChars)


