//console.log("Good morning");

console.log(1 + 3);

// window.alert("Hello world");

h2tag = document.getElementById("demo").innerHTML = "Hello world";

console.log("My name is Uloaku, I am a programmer");

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

let x = 60;
x = 70;
x = 100;
const z = 7;

console.log(x);

console.log(z);

let firstName = "Emma";

console.log(firstName);

/**
 * numbers
 * strings
 * arrays
 * objects
 * null
 * boolean
 * undefined
 */

let num1 = 4;
let names = "Mike";
let arrs = ["Red", "Blue", 3, true];

let obj = {
  username: "Amaka",
  age: 50,
  greet: function () {
    console.log("hello world");
  },
};

let isAdim = true;

console.log(typeof num1);

console.log(typeof names);

console.log(typeof arrs);

console.log(Array.isArray(arrs));

console.log(names);

console.log(arrs);

console.log(typeof obj);

console.log(3 / "hello");

console.log(typeof isAdim);

let y = 50;
let a = "50";

console.log(y === a);

let b = "100";
let c = "5";

let word1 = "Hello ";
let word2 = "World";

console.log(word1 + word2);

console.log(b * c);

console.log(10 + 30);

console.log(10 % 3);

console.log(10 > 20);

/**
 * and && conditions must be true to get true else false
 * or || when one condition is true everything is true else false
 * not ! it turns true to false and vice versa
 */

let sum = 40;
let sum2 = 60;

console.log(sum < sum2 && sum2 > 50); //true

console.log(!(sum === "40" || sum2 != 30)); //true

console.log((44 % 2 == 0 && sum > 40) || 2 * 2 == 3);

// true && false = false || false

/**if
 * else if
 * else
 */

if (false) {
  console.log("yes is true");
} else {
  console.log("it is not true");
}

let course = "Javascript";

if (course == "Javazript") {
  console.log("check well");
} else if (course == "Javascript") {
  console.log("keep checking");
} else if (course == "Javascript") {
  console.log("we are still checking");
} else {
  console.log("finally");
}

let age = 18;

if (age > 18) {
  console.log("You are older");
} else if (age == 18) {
  console.log("you are qualified");
} else {
  console.log("check else where");
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

let eng = 19;
let maths = 12;
let bio = 17;

let totalScore = eng + maths + bio;
let avgScore = Math.round(totalScore / 3);

console.log(totalScore);
console.log(avgScore);

if (avgScore < 40) {
  console.log("F");
} else if (avgScore < 44) {
  console.log("E");
} else if (avgScore < 49) {
  console.log("D");
} else if (avgScore < 59) {
  console.log("C");
} else if (avgScore < 69) {
  console.log("B");
} else {
  console.log("A");
}

let username = "admin";
let password = "123456";

if (username == "admin") {
  if (password === "12345") {
    console.log("login successful");
  } else {
    console.log("incorrect password");
  }
} else {
  console.log("username not found");
}

let ages = 20;

let hasId = false;

if (age >= 18 && hasId === true) {
  console.log("entry is allowed");
} else {
  console.log("entry not allowed");
}

// let isToday = prompt("enter a word to search");
// result = isToday.toLowerCase();

// switch (result) {
//   case "wednesday":
//   case "tuesday":
//     console.log("search found");

//     break;

//   case "apple":
//   case "orange":
//   case "monday":
//     console.log("fruit found");

//     break;

//   default:
//     console.log("not found");
// }

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   default:
//     console.log("invalid day");
// }

// let firstNumber = Number(prompt("enter the first number"));
// let secondNumber = Number(prompt("enter second number"));

// let operation = prompt("Enter an operation: add, substract, multiply, divide");

// switch (operation) {
//   case "add":
//     console.log(firstNumber + secondNumber);
//     break;

//   case "substract":
//     console.log(firstNumber - secondNumber);
//     break;

//   case "multiply":
//     console.log(firstNumber * secondNumber);
//     break;

//   case "divide":
//     console.log(firstNumber / secondNumber);

//     if (secondNumber !== 0) {
//       console.log(firstNumber / secondNumber);
//     } else {
//       console.log("Cannot divide by zero");
//     }
//     break;

//   default:
//     console.log("invalid operation");
// }


/** classwork
 * 
 * 1. Restuarant menu
 * write a program that displays the following
 * 1. Jollof Rice 3000
 * 2. Fried Rice 3,500
 * 3. Beans and Plantain 2,500
 * 4. spaghetti 2,000
 * 
 * 
 * ask the user to enter the number of the food they want
 *  use switch to display the food name and its price
 * 
 * if the user enters an invalid number, display "Food not available"
 */

// let choice = Number(prompt("Enter food choice: 1, 2, 3, 4"))

// switch(choice){
//     case 1:
//         console.log("Jollof Rice, 3000")
//         break;
//     case 2:
//         console.log("Fried Rice, 3500")
//         break;
//     case 3:
//         console.log("Beans and Plantain, 2500")
//         break;
//     case 4:
//         console.log("Spaghetti, 2000")
//         break;
  
//         default:
//             console.log("Food not available")
// }

// for(initialization; condition; afterthought/increment){
//     console.log(result)
// }


// for(let i = 4; i <= 100; i++){
//     console.log(i)
// }

// for(m = 0; m <= 5; m++){
//     console.log("Hello world")
// }

// let str = "Hello world"

// for(n = 0; n <= str.length; n++){
//     console.log(str[n])
// }

// debugger;

// for(i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(i = 2; i <=10; i += 2){
//     console.log(i)
// }

// for(i = 5; i >= 1; i--){
//     console.log(i)
// }

let s = 1

do{
    console.log(s)
    s++
}while(s <= 5)

    // let num = 10;

    // while(num < 5){
    //     console.log(num)
    // }

let sums = Number(prompt("Enter your number"))

for(i = 0; i <= 5; i++){
    console.log(sums)
}

let limit = Number(prompt("enter the last number"))


for(i = 1; i <=limit; i++){
    console.log(i)
}