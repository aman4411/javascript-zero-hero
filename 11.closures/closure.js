function greet(message){
    return function wish (name){
        console.log(message + ' ' + name)
    }
}

var getMessage = greet('Welcome')
var sayHello = getMessage('Uma') // Still Pointing to message 
                                 // parameter of the parent method

