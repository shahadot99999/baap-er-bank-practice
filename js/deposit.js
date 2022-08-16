// //console.log("hello world");

//step 1: deposit handler
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step 2: deposit input value
    const currentdepositvalue = document.getElementById('deposit-field');
    const currentdepositstring = currentdepositvalue.value;
    const currentdeposit = parseFloat(currentdepositstring);



    //step 3: deposit taka add
    const previousDepositValue = document.getElementById('deposit-total');
    const previousDepositString = previousDepositValue.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    //step 4: add privious value and current 
    const currentDepositTotal = currentdeposit + previousDeposit;
    previousDepositValue.innerText = currentDepositTotal;




    //step-5: get ballance current total
    const totallBalence = document.getElementById('balance-total');
    const totallBalenceString = totallBalence.innerText;
    const totallSaveBalence = parseFloat(totallBalenceString);

    // step-6: calculate current total balance
    const currentBalanceTotal = totallSaveBalence + currentdeposit;
    totallBalence.innerText = currentBalanceTotal;

    // step-7
    currentdepositvalue.value = '';
})
