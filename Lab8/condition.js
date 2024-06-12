console.log("Muyinjon Turobov")

console.log("==== Example 1 ====")

let day=true
let night=false;

if (day){
    console.log("Good morning")}

console.log("===== Example 2: if else statement =====")


let n1=8, n2=8

if(n1===n2){
    console.log("they are equal")}
else{
    console.log("they are not equal")}


console.log("===== Example 3: mutiway condition statement =====")
// check if a number is positive, negative or zero
let number=1
if(number>0){
    console.log(`The number ${number} is positive`)}
else if (number<0){
    console.log(`The number ${number} is negative`)}
else if(number===0){
    console.log(`The number ${number} is zero`)}
else{
    console.log('undefined')
}

console.log("===== Example 4: mutiway condition in prompt function =====")
// check if a user enters a number anything, or pressed cancel button

let n = prompt("Enter a number: ")
console.log(n)

if(n===null){
    console.log("User pressed cancel button")}

else if(n===""){
    console.log("User did not enter anything")}

else if(isNaN(n)){
    console.log(`${n} a string`)}

else if(!isNaN(n)){
    console.log(`${n} a number`)}


console.log("===== Example 5: nested conditional statement =====")

// check if a user enters a password that is at least 6 character and no space
let password = prompt("Enter your password: ")

// to find the number of characters in the string, we use the menthod .length
if(password.length>=6){
    console.log(`Password is ${password} has the length of ${password.length}` )
    if(password.indexOf(" ")===-1){
        console.log(`Password is ${password} and has NO SPACE`)
    }
    else{
        console.log(`Password is ${password} and HAS SPACE`)
    }
}
else{
    console.log(`Password is ${password} and has less than 6 characters`)
    if(password.indexOf(" ")===-1){
        console.log(`Password is ${password} and has NO SPACE`)
    }
    else{
        console.log(`Password is ${password} and HAS SPACE`)
    }
}

console.log("===== Exercise 1 - positive or negative =====")

let num = prompt("Enter a number: ")
if(num>0){
    console.log(`The number ${num} is positive`)}
else if (num<0){
    console.log(`The number ${num} is negative`)}
else if(num===0){
    console.log(`The number ${num} is zero`)}
else if(typeof(num) === "String"){
    console.log(`${num} is a string`)
}
else{
    console.log('undefined')
}





console.log("===== Exercise 2 - list =====")

let colors = ["red", "blue", "green", "yellow", "orange"];
let selectColor=prompt("Example 6: select a color using the index")
// all list has index number that starts with 0(leftmost)

switch(selectColor){
   case "0":
        console.log(`The color is ${colors[0]}`)
        break
   case "1":
        console.log(`The color is ${colors[1]}`)    
        break
   case "2":
        console.log(`The color is ${colors[2]}`)
        break
   case "3":    
        console.log(`The color is ${colors[3]}`)
        break
   case "4":
        console.log(`The color is ${colors[4]}`)
        break
   default:
        console.log(`The color is not in the list`)
}

console.log("===== Example 7: string =====")
let greeding ="Good Evening"
console.log(`the seventh letter of the string is ${greeding[6]}`)

console.log("===== Exercise Homework 1: Days =====")

let dayNumber=[1,2,3,4,5,6,7]
let selectday=prompt(`select a day using the number 1-7`)

switch(selectday){
    case "1":
        console.log(`the day is Monday`)
        break
    case "2":
        console.log(`the day is Tuesday`)
        break
    case "3":
        console.log(`the day is Wednesday`)
        break
    case "4":
        console.log(`the day is Thursday`)
        break
    case "5":
        console.log(`the day is Friday`)
        break
    case "6":
        console.log(`the day is Saturday`)
        break
    case "7":
        console.log(`the day is Sunday`)
        break
    default:
        console.log(`the day is not in the list`)
}

console.log("===== Exercise Homework 2: Grade =====")
let Grade = prompt("Enter your grade: ")
if (Grade >= 90) {
    console.log(`Your grade ${Grade} is an A`)
} else if (Grade >= 80) {
    console.log(`Your grade ${Grade} is a B`)
} else if (Grade >= 70) {
    console.log(`Your grade ${Grade} is a C`)
} else if (Grade >= 60) {
    console.log(`Your grade ${Grade} is a D`)
} else if (Grade < 60) {
    console.log(`Your grade ${Grade} is an F`)
}