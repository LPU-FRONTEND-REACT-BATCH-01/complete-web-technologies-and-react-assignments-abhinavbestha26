let account = {
    balance:0,
    transactions:[]
}

function deposit(amount){
    if(amount > 0){
        account.balance +=amount;
        account.transactions.push("Deposited :"+amount);
        return "Deposit Successful $"+amount;
    }else{
        return "Amount must be greater than 0!"
    }
}

function withdraw(amount){
    if(amount <= 0){
        return "Amount must be greater than 0!";
    }
    if(amount > account.balance){
        return "Insufficient balance available: " + account.balance;
    }
    if(account.balance-amount < 500){
        return "The minimum balance of 500 should be maintained!";
    }
    account.balance -= amount;
    account.transactions.push("Withdrawal: " + amount);
    return "The Remaining balance is $: " + account.balance;
}

function getBalance(){
    return "The balance of Your account $"+account.balance;
}

function getTranscations(){
    return account.transactions;
}


// let results = deposit(2000);
// console.log(results);
// let results2 = withdraw(500);
// console.log(results2);
// let results3 = deposit(1000);
// console.log(results3);
// let results4 = getTranscations();
// console.log(results4);
// let results5 = getBalance();
// console.log(results5);

console.log(deposit(2000));
console.log(withdraw(-2500));







