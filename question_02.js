// Create a constructor function called `Car` that has `brand` and `speed` properties.
// Add a method called `accelerate` that increases the speed of the car by a given
// value. Add a method called `print Speed` that logs the current speed of the car.
function car(){
    brand="Honda",
    newSpeed=0
    function accelerate(speed){
        newSpeed=newSpeed+speed;
       return newSpeed
    }
    function printSpeed(newSpeed){
        console.log(newSpeed);
    }
}
let car1=car();
car1.accelerate(50);
