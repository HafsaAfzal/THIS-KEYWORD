// Imagine you have an object called book with properties like title, author, and pages.
// How would you define a method called printInfo that logs a message displaying the
// book's title, author, and number of pages using this keyword?
const book ={
    title:"Jannat kay pattay",
    author:"Nimra Ahmed",
    pages:544,
    printInfo:function(){
        console.log(`The amazing novel ${this.title} is written by ${this.author} and this novel has ${this.pages} pages`)
    }
}
book.printInfo();
