// ? We are going to use backticks (`)
let simple = `This is a template literal`

let str =` Template literal in ES6 `
console.log(str)
console.log(str.length)
console.log(typeof str)

// ? Using Single Quote (')

let anotherString = `Here's a template literal`
console.log(anotherString)

// ? String containing backtick (`)

let strWithBackTick = `Template literals use backticks (\`) instead of quotes (', ") `
console.log(strWithBackTick)

// ? Multiline Strings ( Prior to ES6)

let msg = 'Multiple \n string'
console.log(msg)

let msgWithText = `This text
can 
span multiple lines`

console.log(msgWithText)


// ?? Variable and expression Substitutions

let firstName = "Scott",
    lastName = "Desatnick"

// let greet = 'Hello' + " " + firstName + ' ' + lastName
// console.log(greet)
let greeting = `Hi ${firstName} ${lastName}`
console.log(greeting)

