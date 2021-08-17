/*
    JSON - JavaScript Object Notation
         - Inspired by the object literal notation 
         - property names have to be wrapped in double quotes for JSON
*/

var obj = { name: 'uma', city: 'hydrebad'}

var JSONObject = { "id": 1, "name": "uma", "city": "hydrebad" }

console.log(JSONObject)

var person = { "id": 1, "name": "uma", "city": "hydrebad" }

var jsonStringify = JSON.stringify(person)
console.log(jsonStringify, typeof jsonStringify)

var jsonParser = JSON.parse(jsonStringify)
console.log(jsonParser, typeof jsonParser)