// Interface example
interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

let myDog = new Dog("Buddy", 3);
myDog.makeSound();
