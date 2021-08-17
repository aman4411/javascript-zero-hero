var data = [
          1,
          "Uma",
          true, 
          undefined,
          null,
          function(name){
              return name
          },
          {name: 'JohnGalt'},
          ["Red", "Blue", "Yellow"]
]

console.log(data)
//1. call the function
//2. pass the object name as a parameter to that function
//3. print the name to console
var sample = data[5]
var name = data[6].name
console.log(sample(name))

console.log(data[5](data[6].name))

console.log(data[6].name + ' likes ' + data[7][1])