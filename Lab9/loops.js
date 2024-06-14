console.log("Loops and Muyinjon Turobov")
console.log("====== Example 1: for loop as a counter ======")
for(let i=0;i<=5;i++){
    console.log(`iteration: ${i}`)
}

console.log("====== Example 2: for loop as a decrenebt counter ======")
for(let i=5;i>=0;i--){
    console.log(`iteration: ${i}`)
}

console.log("====== Example 3: condition inside the loop ======")
let counter=0
for(let m =-5; m<=5;m++){
    console.log(`iteration = ${m}`)
    if(m%2===0 && m !==0 ){counter++}

}
console.log(`There is/are ${counter} even number`)


console.log("====== Example 4: While Loop: while loop as counter ======")
//display number from 0 to 4

let p=0 
while(p<=4){
    console.log(`iteration: ${p}`)
    p++
}



console.log("====== Example 5: While Loop: while loop Application ======")
const secret = 8

let guessnumber = parseInt(prompt("Guess The Number 0-10, Hint: The number is 8"))
while(guessnumber !== secret){
    console.log(`The number is ${guessnumber} `)
    guessnumber = parseInt(prompt("Guess The Another Number 0-10 Hint: The number is 8"))
}
console.log(`Good Job, The number is ${secret}`)

console.log("====== Example 6: While Loop: while loop Application in list ======")

let colors = ["red","green","blue","yellow","purple"]
let sizeofcolors = colors.length
console.log(sizeofcolors)

let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("====== Example 7: While Loop: while loop to simulate a password login ======")

const password = "peterpan"
let userpassword = prompt("Enter a Password: Hint: peterpan")
let numerattempt = 0

while(userpassword != password){
        numerattempt++
    if(numerattempt>2){
        console.log("your Account is Locked")
        break
    }
    userpassword = prompt(`This is attempt:${3-numerattempt} Enter Again`)}




console.log("====== Example 8: Do While Loop to simulate a withdraw from a bank account ======")

//use try to withdraw money from an account with $1000
let withd = 0
let bal = 1000

do{
    withdraw=parseInt(prompt(`How much money do you want?`))
    if(withd<=bal){
        bal = bal - withdraw
        break
        
    }
    else if(withd>bal){

        console.log(`insuufficient amount, try again`)
    }
    console.log(`your balance is ${bal} and your withdraw is ${withd}`)

}while(withd>balance)
console.log(`your balance is ${bal}`)


console.log("====== Exercise 1: simu;ate a bank transaction ======")
// simulate the collectionof a pin number of 4 digits
// ask the user to pick a transaction: view the balance,deposit,withdraw --> flow control() - do while loop
// ask the user if they want another transaction. i
// print the result/




