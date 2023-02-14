/**
 * Exercise 21:
 *
 * 1. Create a class named `Person` that takes in as parameters
 *
 *    firstName
 *    lastName
 *
 * 2. The class should use the constructor method to receive
 *    the parameters for when a new instance of the class
 *    is created.
 *
 * 3. Once you have created the Person class, you should
 *    create a new person using the `new Person(...)`
 *    expression. Then, you should store the newly created
 *    person in the `ana` variable.
 *
 * 4. The class should also have a method named `sayName`
 *    that returns the concatenation of the firstName and lastName
 *    with an empty space in between.
 *
 *    @example
 *
 *    "Alex Marks"
 *
 * 5. Create a class named `Employee` that takes in as parameters
 *
 *    firstName
 *    lastName
 *    jobTitle
 *
 * 6. The `Employee` class should extend the `Person` class and use the
 *    `super()` method call to pass the `firstName` and `lastName`
 *     to the `Person` parent class.
 *
 * 7. The `Employee` class should declare inside the constructor
 *    the `jobTitle` property as it’s own besides the ones passed
 *    to the super() call.
 *
 * 8. The `Employee` class should also declare a method named `getJobTitle`
 *    that returns the `jobTitle` of the `Employee`
 */

// Create the Person class
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Ana', 'Spark');

// Create a new instance of the `Person` class with the arguments:
//
// firstName: "Ana"
// lastName: "Spark"
//
// Store the new instance in the `Ana` variable
const ana = person;

// Create the Employee class that extends the Person class
class Employee extends Person {
    constructor(firstName, lastName, jobTitle){
        super(firstName, lastName);

        this.jobTitle = jobTitle;
    }

    getJobTitle(){
        return this.jobTitle;
    }
}

const employee = new Employee('Peter', 'Jackson', 'Developer');

// Create a new instance of the `Employee` class with the arguments:
//
// firstName: "Peter"
// lastName: "Jackson"
// jobTitle: "Developer"
//
// Store the new instance in the `peter` variable
const peter = employee;

// Don’t change the code below this line
export { Person, Employee, ana, peter };

import { removeUnnecessaryItems } from "@babel/preset-env/lib/filter-items";
import setup21Exercise from "./21-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup21Exercise(() => console.log(peter));
    setup21Exercise(() => console.log(peter.sayName()));
    setup21Exercise(() => console.log(peter.getJobTitle()));
    setup21Exercise(() => console.log(ana));
    setup21Exercise(() => console.log(ana.sayName()));
}
