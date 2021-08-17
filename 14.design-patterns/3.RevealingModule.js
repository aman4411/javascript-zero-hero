var Module =(function(){
    var privateMethod = function(){
        return "This is Private Method"
    }
    var someMethod = function(){
        return "This is Some Method"
    }
    var anotherMethod = function(){
        return "This is Another Method"
    }
    var publicMethod = function(){
        return "This is Public Method"
    }

    return {
        method1 : someMethod,
        method2: anotherMethod
    }
})()

console.log(Module)

// ? Accessing Private Method

var Module = (function(){
    var privateMethod = function(message){
        return message + ' from Public Method'
    }

    var publicMethod = function(text){
        return privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }
})()

console.log(Module.publicMethod("Please call private method"))