try {
  // ? Code that may throw an error
}
catch(ex){
 // ? Code to be executed if an error occurs
}
finally {
 // ? Code to be executed regardless of an error
 // ? To Close database connections
 // ? To close network connections 
 // ? Closing file connections
 // ? To clean up our code
}

try {
    var output = getMessage("hello", "uma")
} catch (ex) {
    console.log(ex)
} finally {
    console.log("This will be executed always")
}

try {
    var output = "Hello Uma"
    console.log(output)
} catch (ex) {
    console.log(ex)
} finally {
    console.log("This will be executed always")
}