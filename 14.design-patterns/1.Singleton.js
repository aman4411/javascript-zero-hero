/*
    ? Singleton
    * This pattern ensures a class has only one instance and 
    * provide a global point of acess to it
*/
// ! Problem
// 
//function Student(){
//     console.log('Instnace created')
// }

// var student1 = new Student()
// var student2 = new Student()
// var student3 = new Student()
// var student4 = new Student()
// var student5 = new Student()

// * Solution

var Singleton = (function(){
    var instance = null

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object has been created')
        return obj;
    }

    // var getInstance = function(){
    //     if(!instance){
    //         instance = createInstance();
    //     }
    //     return instance;
    // }

    return {
        getInstance : function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }

})()

var singleton1 = Singleton.getMyInstance()
console.log(singleton1)

var singleton2 = Singleton.getMyInstance()
console.log(singleton2)

var singleton3 = Singleton.getMyInstance()
console.log(singleton3)
