function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Student.prototype.city = "Boston"

var student1 = new Student('Scott', 'Deastnick')
console.log(student1)
console.log(student1.city)

var student2 = new Student('Adam', 'Colson')
student2.city ="Sydeny"
console.log(student2)
console.log(student2.city)

var student3 = new Student('Tuan', 'Bui')
student3.city ="Vietnam"
console.log(student3)
console.log(student3.city)

function Student(){
    this.name= "John"
    this.gender = 'M'
}

var student = new Student()
console.log(Student.prototype)
console.log(student.prototype)
console.log(student.__proto__)

console.log(typeof Student.prototype)
console.log(typeof student.__proto__)

console.log(Student.prototype === student.__proto__)