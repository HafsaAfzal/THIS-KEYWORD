// Imagine you have a function called play which is defined inside an object called
// game. How would you call the play function from within the object using this
// keyword?
const obj={
    nam:"Hafsa",
    play:function(){
        console.log(`Are you ready ${this.nam} to play`);
    }
}
obj.play();