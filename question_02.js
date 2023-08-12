// Create a constructor function called `Car` that has `brand` and `speed` properties.
// Add a method called `accelerate` that increases the speed of the car by a given
// value. Add a method called `print Speed` that logs the current speed of the car.
function car(brand){
    this.brand=brand,
    this.newSpeed=0;
    this.accelerate=function (speed){
        this.newSpeed=this.newSpeed+speed;
       return this.newSpeed
    }
    this.printSpeed=function (){
        console.log(`speed of car ${this.newSpeed}`);
    }
}
let car1=new car("Honda");
car1.accelerate(50);
car1.printSpeed();
