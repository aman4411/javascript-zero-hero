/*
    ? Module Pattern
    * This ptaeern deals with code encapsulation. 
    * It is used to create private and public properties
*/

// var Module = (function(){

// })()

// ? Creating Private Methods - Which atre not accessible to outside world

var Module = (function(){
    var privateMethod = function(){
        console.log('This is Private Method')
    }
    return {}
})()

console.log(Module.privateMethod)

// ? Pubic Method - Available to Outside World

var Module = (function(){
    var publicMethod = function(){
        return 'This is public method'
    }
    return {
        publicMethod : publicMethod
    }
})()

console.log(Module.publicMethod())

var Module = (function(){

    return {
        publicMethod: function(){
            return 'This is public method'
        }
    }

})()

console.log(Module.publicMethod())

// ?  Anonymous Object Literal return

var Module = (function(){
    var privateMethod = function(){
        console.log('This is a Private Method')
    }
    
    return {
        publicMethodOne: function(){
          return "This is Public Method One"  
        },
        publicMethodTwo: function(){
            return "This is Public Method Two"  
        },
        publicMethodThree: function(){
            return "This is Public Method Three"  
        }
    }

})()

console.log(Module)

// ?  Locally Scoped Object Literal

var Module = (function(){

    //locally scoped Object
    var myObj = {}

    var privateMethod = function(){
        return 'This is Private Method'
    }

    myObj.publicMethod = function(){
        return 'This is Public Method'
    }

    return myObj;

})()

console.log(Module)

// ?  Stacked Locally Scoped Object Literal

var Module = (function(){
    var privateMethod = function(){
        return 'This is Private Method'
    }

    var myObject = {
        someMethod : function(){

        },
        anotherMethod : function(){

        }
    }

    return myObject
})()
console.log(Module)