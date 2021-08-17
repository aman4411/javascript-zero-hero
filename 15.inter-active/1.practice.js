// console.log(multiply(1)(2)(3))

// function multiply(num1){
//     return function(num2){
//         return function(num3){
//             return num1 * num2 * num3
//         }
//     }
// }

var a =10;
var b = a;
 a=20;

 console.log(a)
 console.log(b)

 var x = [1,2]
 var y = x;
 x.push(3)

 console.log(x)
 console.log(y)

 var array1 = [1,2]
 var array2 = array1
 array1 = [1,2,3]
 console.log(array1)
 console.log(array2)

 var output = 1 +2 + "uma" + 3+ 5 + "mahesh"
 console.log(output)

 var output1 = (function(x){
    delete x;
    return x;
 })(0)

 console.log(output1) 
 // Outut : 0 becuase delete operator is used to property
 //         of an object, but here x is not an object

 var output2 = (function(data){
    delete data.x;
    return data.x;
 })({x:0})

 console.log(output2)

 var m =1;
 var output3 =(function(){
     delete m
     return m;
 })()

 console.log(output3)

 // ? How to make an array empty ?

 var array = ['a', 'b', 'c', 'd', 'e' ,'f']

 //method 1
 array =[]

 //method 2
 array.length =0;

 //method 3
 array.splice(0, array.length)

 // method 4
 while(array.length) {
     array.pop()
 }

 console.log(array)

 console.log(evenOrOdd(3)) // false
 console.log(evenOrOdd(6)) // true
 console.log(evenOrOdd(7)) // flase

 function evenOrOdd(num){
     return num%2==0
 }

 console.log(getExtension('resume.doc'))
 console.log(getExtension('sample.txt'))
 console.log(getExtension('notepad'))

 function getExtension(fileName){
     var array = fileName.split('.')
     return array[array.length-1]

    // return fileName.split('.').length > 1 ?
    //        fileName.split('.')[fileName.split('.').length-1] :
    //        false
     
    // return fileName.split('.').length > 1 ? 
    //         fileName.split('.')[1] : 
    //         false
 }

 // ? Ternary operator

 var x =4;
 var data = (x==5) ? "Yes X is 5": "X is not 5"
 console.log(data)