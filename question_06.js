// Consider an object called counter with a property count and two methods:
// increment and reset. How would you define the increment method so that it
// increases the count property by 1 using this keyword?
const counter={
    count:0,
    increment:function(){
        this.count=this.count+1;
        console.log(this.count);
    },
    reset:function(){

    }
}
counter.increment();
