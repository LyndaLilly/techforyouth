
//1.
// let stdName = prompt("Enter your name")
// let stdScore = prompt("Enter your score")
// let eng = prompt("enter your eng score")
// let maths = prompt("enter your maths score")

// // let stdScore = eng + maths

// // let avgscore = stdScore / 2

// if(isNaN(stdScore) || stdScore < 0 || stdScore > 100){
//     console.log("Invalid score")
// }else if(stdScore >= 80){
//     console.log(stdName + ", your grade is A, Excellent")
// }else if(stdScore >= 70){
//      console.log(stdName + ", your grade is B, Very Good")
// }else if(stdScore >= 60){
//      console.log(stdName + ", your grade is C, Good")
// }else if(stdScore >= 50){
//      console.log(stdName + ", your grade is D, pass")
// }else{
//     console.log(stdName + ", your grade is F, fail")
// }



let balance = Number(prompt("enter your balance"))
let withdraw = Number(prompt("enter withdrawal amount"))

if(isNaN(balance) || isNaN(withdraw) || balance < 0){
    console.log("Invalid input")
}else if(withdraw <= 0){
    console.log("Invalid withdrawal amount")
}else if(withdraw > balance){
    console.log("Insufficient funds")
}else if(withdraw > 100000){
    console.log("Withdrawal exceeds the daily limit")
}else if(withdraw === balance){
    console.log("Withdrawal successful. Your balance is now zero")
}else{
    let remainBalance = balance - withdraw

    console.log("Withdrawal successful");
    console.log("Remaining balance: ", +  remainBalance)
}