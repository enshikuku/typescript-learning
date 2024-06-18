"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
let myDog = new Dog("Buddy", 3);
myDog.makeSound();
