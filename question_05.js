// You have a constructor function called Person that creates person objects with
// properties like name and age. How would you define a method called introduce that
// logs a greeting message including the person's name and age, using this keyword?
function Person(naam,age){
    this.naam=naam,
    this.age=age,
    this.intro=function(){
        console.log(`Hello! ${this.naam},your age is ${this.age}`)
    }
}   
let person1=new Person("Hafsa",20);
person1.intro();