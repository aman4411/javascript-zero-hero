/*
  ? Destructuring simply implies breaking down a complex structure 
  ? into simple parts
*/

// ? Array Destructuring

let arr = ["Scott" , "Adam" , "Tuan"]

let [value1,value2, value3, value4] = arr; 

console.log(value1) // Set value1 to arr[0]
console.log(value2) // Set value1 to arr[1]
console.log(value3) // Set value1 to arr[2]
console.log(value4) // Set value1 to arr[3]

// ? Split()

let [firstName, lastName] = "John Galt".split(' ')
console.log(firstName)
console.log(lastName)

let [fName, ,title] = ["Uma", "Mahesh", "Meka"]
console.log(title)



// ? Object Destructuring

let user = {
    name : 'John',
    age: 39
}

for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

let options = {
    title1: "Menu",
    height: 100,
    width: 200
}

let {title1, width, height} = options

console.log(title1)
console.log(width)
console.log(height)


