// var person = {
//     firstName: 'Uma',
//     lastName: 'Mahesh',
//     city: 'Hyderabad'
// }

// person.age=39 // Add
// person.firstName='Umesh' // Update
// delete person.age; // Delete
// console.log(person) // Read

/*
  ? Object.preventExtensions 
  * We can edit and delete the properties
  * But we can't add new properties
*/

var preventObject = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad'
}

Object.preventExtensions(preventObject)

preventObject.age=39 // Add
preventObject.firstName='Umesh' // Update
delete preventObject.city; // Delete
console.log(preventObject) // Read


/*
  ? Object.seal 
  * We can't add or delete the properties
  * But we can update the properties
*/

var sealObject = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad'
}

Object.seal(sealObject)

sealObject.age=39 // Add
sealObject.firstName='Umesh' // Update
delete sealObject.city; // Delete
console.log(sealObject) // Read

/*
  ? Object.freeze 
  * We can't add, update and delete the properties
  * 
*/

var freezeObject = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad'
}

Object.freeze(freezeObject)

freezeObject.age=39 // Add
freezeObject.firstName='Umesh' // Update
delete freezeObject.city; // Delete
console.log(freezeObject) // Read

var freezeObjectWithInObject = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Hyderabad',
    address: {
        sate: 'Telangana',
        country: 'India'
    }
}

Object.freeze(freezeObjectWithInObject)

freezeObjectWithInObject.age=39 // Add
freezeObjectWithInObject.firstName='Umesh' // Update
delete freezeObjectWithInObject.city; // Delete
console.log(freezeObjectWithInObject) // Read

Object.freeze(freezeObjectWithInObject.address)
freezeObjectWithInObject.address.country="Australia"
console.log(freezeObjectWithInObject) // Read