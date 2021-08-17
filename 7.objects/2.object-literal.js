//person["FirstName"] ="Adam Colson"
//person.firstName = "Adam"
//person.lastName = "Colson"
// Object literal Syntax - e.g. var obj = {}

var person = {
    firstName : 'Adam',
    lastName: 'Colson',
    email: 'adam@ef.com',
    address: {
        state: 'New South Wales',
        city: 'Sydney',
        country: 'Australia'
    },
    // This function is called method because this is inside an object
    getFullName: function(){ 
        return this.firstName + ' ' + this.lastName
    }
} 


console.log(person)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.address.state)
console.log(person.getFullName())

