console.log("====== Exercise 1: simulate a bank transaction ======")
// simulate the collection of a pin number of 4 digits
// ask the user to pick a transaction: view the balance,deposit,withdraw --> flow control() - do while loop
// ask the user if they want another transaction. i
// print the result/



let pin = parseInt(prompt('Enter Your Pin' + ' Hint: 2000'))
const userpin = 2000
let balance = 1000
let withdraw = 0
let attempt = 1
let deposit = 0
let transaction = 1
let bankoption = 0

while(userpin != pin){
    pin = prompt(`This is how many attempt: ${  3 - attempt} left Enter Again`)
    attempt++
    if(attempt>2){
        console.log("your Account is Locked")
        break
    }
    
}

if(userpin == pin){
    while (transaction === 1) {
        let bankoption = parseInt(prompt("SELECT BY NUMBER: 1- Withdraw 2-Deposit 3-View "))
    switch(bankoption){
        case 1:
            do {
                withdraw = parseInt(prompt("How much money do you want to withdraw?"));
                if (withdraw <= balance) {
                    balance -= withdraw;
                    console.log(`Your balance is ${balance} and you withdrew ${withdraw}`);
                } else {
                    console.log("Insufficient funds, try again.");
                }
            } while (withdraw > balance);
            break;

        case 2:
            deposit=parseInt(prompt("How much do you want to deposit"));
    
            if(deposit>=0){
                balance=balance + deposit
                console.log(`You depositted ${deposit} and Your Balance is ${balance}`);
    
            }
    
            else{console.log("Invalid input Try again")
            }
            break;
            
        case 3:
            console.log(`Your balance is ${balance}`);
            break;
            
        default:
            console.log("Invalid input Try again")
            
    }
    transaction = parseInt(prompt("Do you want another transaction: 1-Yes 2-No"))}
    
    if (transaction === 2) {
        console.log("Thank you for using our services.");
    }

    else if (transaction != 1 && transaction != 2) {
        console.log("invalid input Try again");
        transaction = parseInt(prompt("Do you want another transaction: 1-Yes 2-No"));
    }}

