/*
 * One Function(Class) gets access to the properties and methods of another Function(Class).
*/
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

function Student(age){
    this.age = age
}

//var person1 = new Person('Scott', 'Desatnick')
//Object.freeze(person1)

// Inherit the peorperties from Parent
Student.prototype = new Person('Scott', 'Desatnick')

Student.prototype.getAge = function(){
    return this.age;
}

var student = new Student(45);
console.log(student)
student.firstName ="Mahesh"
console.log(student.firstName) // Parent Property
console.log(student.lastName) // Parent Property
console.log(student.age) // Child Property
console.log(student.getFullName()) // Parent Method
//console.log(student.getAge()) // Child Property