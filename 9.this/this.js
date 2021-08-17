console.log(this) // this - points to global object
// console.log(window.document)
// console.log(window.name)

function sample(){  
    console.log(this) // this - points to global object
}

sample()

var b = function(){
    console.log(this) // this - points to global object
}

b()

function test(){
    console.log(this)
    this.newVariable = "hello"
}

test()

console.log(newVariable)

// This inside a function which is inside an object 

var obj = {
    name: 'Uma',
    log: function(){
        console.log(this)
    }
}

obj.log()

// Problem 
var studentObj = {
    name: 'Uma',
    log: function(){
        this.name="Mahesh"
        console.log(this)

        var setName = function(){
            this.name = 'Umesh'
            console.log(this)
        }
        setName()
        console.log(this)
    }
}


// Solution - 1

var studentObj = {
    name: 'Uma',
    log: function(){
        var self = this;
        
        self.name="Mahesh"
        console.log(self)

        var setName = function(){
            self.name = 'Umesh'
            console.log(self)
        }
        setName()
    }
}

studentObj.log()
