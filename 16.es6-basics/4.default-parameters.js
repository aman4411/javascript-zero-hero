function sayHello(message){
    console.log(message)
}

sayHello()

// ? ES5 Syntax and Fix
function say(message){
    message = typeof message !== 'undefined' ? message : "Hi"
    console.log(message)
}

say()

// ? ES6 Syntax and Fix

function sayHey(message="How are you"){
    console.log(message)
}

sayHey() // How are you
sayHey("I am fine") // I am fine

