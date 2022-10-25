// console.log('Hellow from main.js')
// let age = 25
// console.log(age)
// const salary = 8000
// console.log(salary)
// const person = {
//     firstName: "Sunday",
//     lastName: "Ugwuanyi",
//     age: 32,
// }
// console.log(person.firstName)
// const oddNumbers = [1, 3, 5, 7, 9]
// console.log(oddNumbers[0])
// let a = 10
// a = 'Sunday'
// a = true
// console.log(a)
// let x = 5
// let y = 10
// console.log(y / x)
// console.log(x % y)
// console.log(y % 6)
// const isValidNumber = x > 20 || 8 > y
// console.log(isValidNumber)
// const isValid = false
// console.log(!isValid)
// console.log('Sunday' + 'Ugwuanyi')


// //const isEven = 10 % 2 == 0 ? true : false
// const isEven = 10 % 2 == 0 ? 'Number is even' : 'Number is odd'
// console.log(isEven)

//console.log('main' + 2)

// const num = -5
// if (num > 0) {
//     console.log('Number is positive')
// } else {
//     console.log('Number is Not positive')
// }
// const num = 0
// if (num > 0) {
//     console.log('Number is positive')
// } else if (num < 0) {
//     console.log('Number is Negative')
// } else {
//     console.log('Number is zero')
// }

// const color = '0'
// switch (color) {
//     case 'red':
//         console.log('Color is red')
//         break
//     case 'blue':
//         console.log('Color is blue')
//         break
//     case 'green':
//         console.log('Color is green')
//         break
//     default:
//         console.log('Not a valid color')
// }

//Looping code: For loop, While loop, Do while loop, For of loop

// for (initializer; condition; final-expression){
//    code to run 
// }

// for (let i = 1; i <= 5; i++) {
//     console.log('Iteration' + i)
// }

// let i = 1
// while (i <= 5) {
//     console.log('Iteration' + i)
//     i++
// }
// let i = 6
// do {
//     console.log('Iteration' + i)
//     i++
// } while (i <= 5)

// const numArray = [1, 2, 3, 4, 5]
// for (const n of numArray) {
//     console.log('Iteration' + n)
// }

//Functions
// function greet(username) {
//     console.log('Good morning ' + username)
// }

// greet('Sunny')
// greet('Bruce')

// function add(a, b) {
//     return a + b
// }
// const sum = add(5, 10)
// console.log(sum)

// const arrowSum = (a, b) => {
//     return a + b
// }
// const sum = arrowSum(23, 27)
// console.log(sum)

// const minus = (a, b) => a - b

// const subt = minus(4, 23)
// console.log(subt)

//Scope

// if (true) {
//     const myName = 'Sunday'
//     console.log(myName)
// }

// function testFn() {
//     const myName = 'Sunny'
//     console.log(myName)
// }
// testFn()

// const myNum = 100
// if (true) {
//     const myName = 'Sunday'
//     console.log(myNum)
// }

// ************************************** //
//         Advanced JavaScript
// ************************************** //
// function add(a, b, c) {
//     return a + b + c
// }
// console.log(add(2, 5, 9))

// function sayMyName(name) {
//     console.log(`My name is ${name}`)
// }
// sayMyName('Hyginus Sunday')

// const person = {
//     name: 'Sunday',
//     sayMyName: function() {
//         console.log(`My name is ${this.name}`)
//     },
// }
// person.sayMyName()

// function sayMyName() {
//     console.log(`My name is ${this.name}`)
// }
// sayMyName.call(person)

// function person(name) {
//     this.name = name
// }
// const p1 = new person('Hyginus')
// const p2 = new person('Sunday')

// console.log(p1.name, p2.name)

// function person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }
// const person1 = new person('Hyginus', 'Ugwuanyi')
// const person2 = new person('Sunny', 'Ugwuanyi')

// person1.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// console.log(person1.getFullName())

// person2.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// console.log(person2.getFullName())

// function person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }
// const person1 = new person('Hyginus', 'Ugwuanyi')
// const person2 = new person('Sunny', 'Ugwuanyi')

// person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// console.log(person1.getFullName())
// console.log(person2.getFullName())

// class person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }
//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const classP1 = new person('Sunny', 'Ugwuanyi')
// console.log(classP1.sayMyName())

// const obj = {
//     [Symbol.iterator]: function() {
//         let step = 0
//         const iterator = {
//             next: function() {
//                 step++
//                 if (step == 1) {
//                     return { value: 'Hello', done: false }
//                 } else if (step == 2) {
//                     return { value: 'world', done: false }
//                 }
//                 return { value: undefined, done: true }
//             },
//         }
//         return iterator
//     },
// }

// for (const word of obj) {
//     console.log(word)
// }

// function normalFuction() {
//     console.log('Hello')
//     console.log('world')

// }

function* generatorFunction() {
    yield 'Hello'
    yield 'world'
}
const generatorObject = generatorFunction()
for (const word of generatorObject) {
    console.log(word)
}