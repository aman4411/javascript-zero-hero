var sayHello = function(){
    return "This is anonymous function"
}

var message = sayHello()
console.log(message)

/* 
 ? You can use function name, 
 ? but it doesn't make any difference
*/
var sendWishes = function sample(){
    return "Best wishes to you all"
}

var message = sendWishes()
console.log(message)

var getFullName = function (firstName, lastName){
    return firstName + ' ' + lastName
}

var fullName = getFullName('Tuan', 'Bui')
console.log(fullName)

// Use case:  using function inside an object
var obj = {
    firstName: 'uma',
    lastName: 'mahesh',
    getFullName : function(){
        this.firstName + ' ' + this.lastName
    }
}