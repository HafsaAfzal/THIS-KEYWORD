// You have a constructor function called Person that creates person objects with
// properties like name and age. How would you define a method called introduce that
// logs a greeting message including the person's name and age, using this keyword?
function person(naam,age){
    this.naam=naam,
    this.age=age,
    this.intro=function(){
        console.log(`hello ${this.naam},your age is ${this.age}`)
    }
}
let person1=new person("Hafsa",20);
person1.intro();