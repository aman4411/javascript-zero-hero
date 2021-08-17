function getName(){
    //console.log('Hello')
    return "Scott Desatnick"
    // return
}

var userName = getName()
console.log(userName)

function getFullName(firstName, lastName){
    return firstName + ' ' + lastName
}

var fullName1 = getFullName()
console.log(fullName1, typeof fullName1)


var fullName2 = getFullName('Adam')
console.log(fullName2, typeof fullName2)

var fullName3 = getFullName('Adam', 'Colson')
console.log(fullName3, typeof fullName3)