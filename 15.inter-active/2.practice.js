console.log(addArray([1,2,3,4,5])) //15
console.log(addArray([1,2,3,4,5,6,7,8,9,10])) //55
console.log(addArray([1,2,3,'uma',4,5])) //15
console.log(addArray([1,2,3,'uma', {name: 'mahesh'},4,5])) //15
console.log(addArray([1,2,[[3],4],5])) //15

function addArray(array){
    var total = 0;
        array.forEach(function(item){
            if(typeof item == "number"){
                total += item
            } else if(Array.isArray(item)){
                total +=addArray(item)
            }
        })

    return total
}

var data = [
    {name: 'Uma', age: 39},
    {name: 'Swathi', age: 38},
    {name: 'Jagrav', age: 8, city: 'sydeny'},
]
console.table(data)

console.log("Hello %s your Id is %i", "Uma", 12345)
console.log("student data : %o is availabe", {name: 'uma', city: 'hyd'})

var firstName ='Scott'
var lastName = 'Desatnick'
var message= `FirstName is ${firstName} and lastname is ${lastName}`

console.log(message)