/*
    ? Fat Arrow (=>) functions
    ! Fat arrow function is not an alternative to reguar function 
    ! it is just a shorter way of writing regular function
*/

// let add = function(x,y){
//     return x+y;
// }

// console.log(add(10,20))

// ? using fat-arrow function 
let add = (x,y) => {
    return x+y;
}
console.log(add(10,20))

// ?? we don't have to use return statement 
// ?? if there is no block

let addition = (x,y) => x+y;

console.log(addition(30,20))

// ?? However if we are using block synatx, 
// ?? we need to specify the return keyword

let additional = (x,y) => { return x+y}
console.log(additional(30,20))

/*
    ! Both the below statements are equal
    () => statement
    () => {return expression}
*/

// ? Sort an array

let numbers = [4,2,6]

numbers.sort(function(a,b){
    return b-a;
})

console.log(numbers)

let newNumbers = [4,2,6]

newNumbers.sort((a,b)=>b-a)

console.log(newNumbers)

/*
  ?? Takes Single parameter

  (param) => statement
   param  => statement    // both are equal

*/

let names = ["John", "Scott", "Adam", "Tuan"]

let lengths = names.map(name => name.length)

console.log(lengths)

// ? with no parameters
let logDocument = () => console.log(window.document)
logDocument()

// ? Line Breaks

// let multiply = (x,y) 
// => x,y  // This will throw sytanx error

// Below one is a valid Syntax
let multiply = (x,y) => 
x,y  // This will work - 

console.log(multiply(5*6))

// ?? Object Literl

// let setColor = function(color){
//     return {value: color}
// }

// let backGroundColor = setColor('Green')
// console.log(backGroundColor)

let setColor = color => ({value: color})
let backGroundColor = setColor('Green')
 console.log(backGroundColor)

// ? Meaning of 'this'

// var employee = {
//     id: 1,
//     greet: function(){
//         var self = this;
//         setTimeout(function(){
//             console.log(self.id)
//         },1000)
//     }
// }

// employee.greet() 

/*
    * When ever we use an arrow function it is not going to 
    * create its own 'this', so this is going to be referring 
    * its parent 'this'
*/
var employee = {
    id: 1,
    greet: function(){
        setTimeout(() =>{console.log(this.id)},1000)
    }
}

employee.greet() 

