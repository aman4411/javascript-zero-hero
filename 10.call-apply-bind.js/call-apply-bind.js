var person1 = {firstName: 'Uma', lastname:'Swathi'}
var person2 = {firstName: 'Jagrav', lastname: 'Meka'}

function getName(message, city){
    return message + ' to ' + city + ' ' +
           this.firstName + ' ' + this.lastname
}

// Bind will give context to 'this' of our function 
// Bind will return a function
var getNameUsingBind = getName.bind(person1)
var fullNameUsingBind = getNameUsingBind('Hello', 'Hyderabad')
console.log(fullNameUsingBind)

var getNameUsingBind = getName.bind(person1)('Hello', 'Hyderabad')
console.log(getNameUsingBind)

var getNameUsingCall = getName.call(person2,'Welcome', 'Bengaluru')
console.log(getNameUsingCall)

var getNameUsingCall = getName.apply(person2,['Welcome', 'Bengaluru'])
console.log(getNameUsingCall)