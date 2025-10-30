// function which whenever called prints a 
// count and if it's called afterwards it 
// updates  the count by +1

// counter() //1
// counter() //2
// counter() //3
// counter() //4

// let count = 0
 
// function counter()
// {   
      

//     count++

//     console.log(count)
// }

// lexical scoping : when a function searches for variable or function 
// in its global scope

// function counter(){
//     let count = 0

//     function childCounter(){
//         count++
//         return (count)
//     }
//     return childCounter
// }

// //closure -> count = 0
// //count++
// //return count

// count = 5

// let counting = counter()

// console.log(counting())
// console.log(counting())
// console.log(counting())
// console.log(counting())

// whenever there's nested functions, and 
// the parent function returns the child fn 
// without calling it, and the child function has some 
// dependancy from parent scope (lexical scope )
// JS create a closure where it stores the 
// reference for the parent's dependancy
// and by that the child will still be able 
// to access the dependence even after the 
// parent is destroyed.

// Closer is important for encapsulation a code.

// function Bank(){
//     let balance = 0

//     function deposit(amnt){
//         balance += amnt
        
//         console.log(balance)
//     }
//     return deposit
// }

// // closer

// let makingDeposit = Bank()
// Bank(100)
// Bank(200)


//MODULES

// Import Export
// 1. Named Export
// 2. Default Export

// import  {add} from "./modu/add.js"
// console.log(add(10,20))

import {sub, add, username} from "./modu/add.js"
console.log(sub(5,4))
console.log(username)
console.log(add(3,4))

// named export import
 
 