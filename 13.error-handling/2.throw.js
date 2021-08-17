// ! Throwing Errors

try {
    throw "Error Occured in Try Block"
} catch (ex){
    console.log(ex)
}


try {
    // Code to get Id 

    // Code that may have issues

    // Code may have issues 
    throw {
        number: 101,
        message: 'There are multiple students with same ID'
    }

    // Unreachabe Code
    var a =10;
    throw {

    }
} catch (uma) {
    console.log(uma)
} 