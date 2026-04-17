type PaymentOption = "UPI" | "Card" | "COD" | "NetBankin"

function payment(amount:number,modeOfPayment:PaymentOption){
    if(modeOfPayment === "COD"){
        return amount+50;
    }else if(modeOfPayment === "Card"){
        return (0.05 * amount)+amount
    }else if(modeOfPayment === "UPI"){
        return (0.1*amount)+amount;
    }else{
        return ;
    }
}

console.log(payment(800,"Card"));