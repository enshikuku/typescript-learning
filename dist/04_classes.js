"use strict";
// Class example
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
let person = new Person("Shikuku");
console.log(person.greet());
