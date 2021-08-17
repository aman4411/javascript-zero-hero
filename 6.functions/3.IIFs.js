/*
    ? IIF - Immediately Invoked Function
*/

(function(message){
   console.log(message)
})('Welcome to IIFs');

var getMessage = (function(message){
    return message
})('Welcome to IIFs')

console.log(getMessage);

(function(message){
    return message
}('Welcome to IIFs'));

console.log(getMessage);

// Statement
//(var foo=10 >9) // Error
//(var foo="foo", bar="bar") // Error

// Expression
(10>9);
(console.log('hi'))