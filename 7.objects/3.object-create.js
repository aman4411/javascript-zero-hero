// var person1 = new Object()
// var person2 = {}
var person = Object.create(null)

person.firstName ="Scott"
person.lastName ="Desatnick"

var emailProperty = "email"
person[emailProperty] = "Scott@ef.com"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["email"])

person["address"] = new Object()

person["address"]["state"] ="Masachusetts"
person["address"]["city"] ="Boston"
person["address"]["country"] ="USA"
console.log(person)
