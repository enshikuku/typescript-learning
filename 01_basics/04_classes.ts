// Class example
class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

let person = new Person("Shikuku");
console.log(person.greet());
