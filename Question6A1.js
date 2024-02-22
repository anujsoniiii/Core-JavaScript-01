paymentMethod = "credit";  // we take credit you can take debit and paypal also

switch(paymentMethod){
    case "credit":
console.log("Processing fee of credit is:2%");
break;

case "debit":
console.log("Processing fee of debit is:1.5%");
break;

case "paypal":
    console.log("Processing fee of paypal is:3%");
    break;

    default:
        console.log("Invalid payment method")
}