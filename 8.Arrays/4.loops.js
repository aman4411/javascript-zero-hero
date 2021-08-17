var items = ["Laptop", "Desktop", "Ipad", "Chair"]

// 1. Using for loop
console.log('***** Using For *****')
for(var i=0; i<items.length; i++) {
    console.log(items[i])
}

// 2. Using foreach loop
console.log('***** Using ForEach *****')
items.forEach(function(item){
    console.log(item)
})

// 3. Using foreach loop
console.log('***** Using Map *****')
items.map(function(item){
    console.log(item)
})

// Difference b/w forEach vs Map

var dataUsingForEach = items.forEach(function(item, index){
    return item
})

var dataUsingMap = items.map(function(item, index){
    return item + '-' + index
})

console.log(dataUsingForEach)
console.log(dataUsingMap)

// 4. for loop with in/of

for(item in items){
    console.log(item)
}

for(item of items){
    console.log(item)
}

