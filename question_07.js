// Let's say you have an object called product with properties like name, price, and
// discount. How would you define a method called calculateDiscountedPrice that
// calculates and returns the discounted price of the product using this keyword?
const product ={
    Name:"chocolate",
    price:499,
    discount:0.5,
    calculateDiscountedPrice:function(){
        discountedPrice=this.price*(1-this.discount);
        console.log(`The original price of ${this.Name} is ${this.price} and The discounted price of ${this.Name} is RS ${discountedPrice} only `)
    }
}
product.calculateDiscountedPrice();
// console.log(`the discounted price of ${this.Name} is ${product1}`)