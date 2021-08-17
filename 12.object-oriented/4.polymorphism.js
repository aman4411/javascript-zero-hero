/*
  ? Polymorphism
  ! Method Overloading - Not Possible - Sample(), Sample(number,number), Sample(string, number, string), Sample(string, string)
  * Method OverRiding - return "Data"  you can return different data in child
*/

function Shape(){

}

Shape.prototype.draw = function(){
    return " I am generic Shape"
}

// Circle

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype) // PolyMorphism

Circle.prototype.draw = function(){
    return "I am Circle"
}

// Circle

function Square(){

}

Square.prototype = Object.create(Shape.prototype) // PolyMorphism

Square.prototype.draw = function(){
    return "I am Square"
}

// Circle

function Traiangle(){

}

Traiangle.prototype = Object.create(Shape.prototype) // PolyMorphism

// Traiangle.prototype.draw = function(){
//     return "I am Traiangle"
// }

// var shape1 = new Shape()
// var shape2 = new Circle()
// var shape3 = new Square()
// var shape4 = new Traiangle()

// console.log(shape1.draw())
// console.log(shape2.draw())
// console.log(shape3.draw())
// console.log(shape4.draw())

var shapes = [new Shape(), new Circle(), new Square(), new Traiangle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})