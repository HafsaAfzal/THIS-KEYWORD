// Create an object called `person` with a `name` property and a `greet` method. The
// `greet` method should log a greeting message with the person's name.
const person ={
    name:"Hafsa",
    greet:function(){
        console.log(`Hello! ${this.name}`)
    }
}
person.greet();