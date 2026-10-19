//console.log("Good morning");

console.log(1 + 3);

// window.alert("Hello world");

h2tag = document.getElementById("demo").innerHTML = "Hello world";

console.log("My name is Uloaku, I am a programmer")

/**
 * djjhd
 * dhdh
 * dgdh
 */

//Practical 
// Students will create an HTML webpage and use JavaScript to display messages, introduce 
// themselves and interact with the browser console. 

/**
 * automatic
 * var
 * let
 * const
 */

// x = 7

// x = 10

// var x = 100




let x = 60
x = 70
x = 100
const z = 7


console.log(x)

console.log(z)

let firstName = "Emma"

console.log(firstName)

/**
 * numbers
 * strings
 * arrays
 * objects
 * null
 * boolean
 * undefined
 */


let num1 = 4
let names = "Mike"
let arrs = ["Red", "Blue", 3, true]

let obj = {
    username : "Amaka",
    age: 50,
    greet: function(){
        console.log("hello world")
    }
}

let isAdim = true

console.log(typeof num1)

console.log(typeof names)

console.log(typeof arrs)

console.log(Array.isArray(arrs))

console.log(names)

console.log(arrs)

console.log(typeof obj)

console.log(3 / "hello")

console.log(typeof isAdim)

let y = 50
let a = "50"

console.log(y === a)

let b = "100"
let c = "5"

let word1 = "Hello "
let word2 = "World"

console.log(word1 + word2)

console.log(b * c)

console.log(10 + 30)

console.log(10 % 3)

console.log(10 > 20)

/**
 * and && conditions must be true to get true else false
 * or || when one condition is true everything is true else false
 * not ! it turns true to false and vice versa
 */

let sum = 40
let sum2 = 60

console.log(sum < sum2 && sum2 > 50) //true

console.log(!(sum === "40" || sum2 != 30)) //true

console.log(44 % 2 == 0 && sum > 40 || 2 * 2 == 3)

// true && false = false || false


/**if
 * else if
 * else
 */

if(false){
    console.log("yes is true")
}else{
    console.log("it is not true")
}


let course = "Javascript"

if(course == "Javazript"){
    console.log("check well")
}else if(course == "Javascript"){
    console.log("keep checking")
}else if(course == "Javascript"){
    console.log("we are still checking")
}else{
    console.log("finally")
}


let age = 18

if(age > 18 ){
    console.log("You are older")
}else if(age == 18){
    console.log("you are qualified")
}else{
    console.log("check else where")
}

//staff = 10,000, 7,000
//if a staff salary is less than 7,000 add 10,000 for the staff

// let salary = 10000

// if(salary < 7000){
//     console.log(salary + 10000)
// }else(
//     console.log(salary)
// )


// let salary = parseInt(prompt("Enter your salary"))

// if(salary < 7000){
//     console.log(salary + 10000)
// }else(
//     console.log(salary)
// )


let eng = 19
let maths = 12
let bio = 17

let totalScore = eng + maths + bio
let avgScore = Math.round(totalScore / 3)

console.log(totalScore)
console.log(avgScore)

if(avgScore < 40){
    console.log("F")
}else if(avgScore <  44){
   console.log("E")
}else if(avgScore <  49){
       console.log("D")
}else if(avgScore < 59){
       console.log("C")
}else if(avgScore < 69){
       console.log("B")
}else{
    console.log("A")
}