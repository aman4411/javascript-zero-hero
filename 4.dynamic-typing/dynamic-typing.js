/*
 you don't tell the engine what type of data a variabe holds,
it figures out while your code running.
*/
var a = 10
    a = "uma"
    a = true
    a = undefined
    a = null
    a = []
    a = function(){}
    a = {}

console.log(a, typeof a)