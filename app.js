var firstName = 'Justin';
const states = 50;

var sum = add(5, 4);
console.log(sum);

// The function "add" uses the variable 'sum' to recieve the data for "num1" and "num2"//
// to complete the assinged function. In this case it is num1 + num2.//

function add(num1, num2) {

    return num1 + num2;
};



sayHello("Hello World!")

function sayHello(value) {
    console.log(value)

}

// The checkAge function evaluates the data put into each callback and executes a 
// message if the parameters are met. 



checkAge('Charles', 21)
checkAge('John', 17)
checkAge('Abby', 27)
checkAge('James', 18)


function checkAge(names, age) {



    if (age <= 20) {

        console.log('Sorry' + " " + names + ", you aren't old enough to view this page.");

    }

}

// While(condition) creates a loop that stops after you add and increment counter (i++)

let veggies = ['Asparagus', 'Green Beans', 'Onions', 'Bell Peppers', 'Zucchini']
let i = 0;

while (i < veggies.length) {
    console.log(veggies[i])
    i++;
}

// Console.log(pet) logs the defined obeject 'pet'. The object has mutliple values

let pet = {

    name: 'Mr. Saturday',
    breed: 'Chocolate Lab',
}

console.log(pet)

let person1 = {

    name: 'Susan',
    age: 20,
}

let person2 = {

    name: 'Daniel',
    age: 24,
}

let person3 = {

    name: 'Xavier',
    age: 28,
}

let person4 = {

    name: 'Tori',
    age: 19,
}

let person5 = {

    name: 'Dawn',
    age: 21,
}

let people = [person1, person2, person3, person4, person5]

let a = 0

while (a < people.length) {
    
    checkAge(person1.name, person1.age)
    checkAge(person2.name, person2.age)
    checkAge(person3.name, person3.age)
    checkAge(person4.name, person4.age)
    checkAge(person5.name, person5.age)
    break;
    
    
}

function getLength(girth) {

    console.log(girth.length)
}

getLength('Hello World')


let girth = 11

console.log('The world is an odd place!')




