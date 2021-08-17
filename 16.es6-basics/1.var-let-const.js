/*
    ? var - function scoped
    ? let, const - block scoped
    ? let - can be re-assigned 
    ? const - can't be re-assigned
*/

function sample(){
    var variable ="hello"
    console.log(variable)
}
//sample()
//console.log(variable) // This will thorw an error

/*
    ? let, const - block scoped
*/

if(true){
    var foo ="Hello"
    let bar = "How are you ?"
    const baz ="I am fine"

    console.log(foo)
    console.log(bar)
    console.log(baz)
}

console.log(foo)
console.log(bar) // Reference Error
console.log(baz) // Reference Error

// Hoisting 
function sample(){
    console.log(temp);
    if(true){
        var temp = "aman";
    }
}

sample();

function test(){
    let data = "Some data"
    if(true){
        var foo ="Hello"
        let bar = "How are you ?"
        const baz ="I am fine"
    
        console.log(foo)
        console.log(bar)
        console.log(baz)
    }
    
    console.log(foo)
    //console.log(bar) // Reference Error
    //console.log(baz) // Reference Error

    console.log(data)
}

test()

// ? var outside of a for-loop
// for(var i=0; i< 3; i++){
//     console.log(i)
// }
// console.log(i) // 3

// ? let outside of a for-loop
for(let i=0; i< 3; i++){
    console.log(i)
}
//console.log(i) // Reference Error

// ? re-defining let

function sample(){

    let foo=1;
    foo =10

   let foo =101 //can't re-assign same variable
   console.log(foo)
}

console.log(foo)

sample()

// ? const 

const myBoolean = true;

if(myBoolean) {
    const users = ["Scott", "Adam", "Tuan"]
    users = users.concat("Uma")
    console.log(users)
}
