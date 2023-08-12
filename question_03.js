// Create an object called `calculator` with a `value` property and three methods: `add`,
// `subtract`, and `multiply`. Each method should take a number as a parameter and
// update the `value` property accordingly. Add a method called `printValue` that logs
// the current value.
const calculator={
    value:0,
    add:(num)=>{
        this.value=num+1;
        return this.value
    },
    sub:(num)=>{
        this.value=num-1;
        return this.value;
    },
    mul:(num)=>{
        this.value=num*5;
        return this.value;
    },
    printValue:()=>{
        console.log(this.value);
    }
}
calculator.add(5);
calculator.sub(5);
calculator.mul(5);
calculator.printValue();