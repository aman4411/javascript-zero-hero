console.log(this)
console.log(window)
var name ="uma" // Global variable
function sample(){
   var  name ="mahesh" // Local Variable
}


//console.log('Hey')
// console.warn('Please check this')
// console.info('Provide more info please')
// console.error('There is an error')

var a = 1 + 2 + "uma" + 3 + 4
console.log(a, typeof a)

var value = undefined + " Hello"
console.log(value, typeof value)

var output = null + " Hey"
console.log(output, typeof output)


console.log(1=="1") // Only Check the Value
console.log(1==="1") // Check the Value and Type

setTimeout(function(){
   console.log('Hello')
}, 3000)

setInterval(function(){
   console.log('How are you')
}, 3000)