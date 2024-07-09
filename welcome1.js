let depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click',function(){
    let depositInput = document.getElementById('deposit-input').value
    if(depositInput == ''){
        alert("Please enter the Deposit amount")
    }
    else{
        // alert(depositInput)
        const depositText = document.getElementById("deposit-text");
        const currentDepositText = depositText.innerText; 
        // console.log(currentDepositText)

        let wale = parseFloat(currentDepositText)+parseFloat(depositInput);
        wale = wale.toFixed(2)
        depositText.innerText = wale
        depositInput.value = "";

        const balanceText = document.getElementById("balance-text");
        const updateBalance = (parseFloat(wale)+parseFloat(balanceText.innerText)).toFixed(2);
        balanceText.innerText = updateBalance;
    }
})

let withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener("click",function(){
    let withdrawInput = document.getElementById('withdraw-input').value
    if(withdrawInput == ''){
        alert("Please Enter the withdraw Amount")
    }
    else{
        // // alert(withdrawInput)
        const withdrawText = document.getElementById('withdraw-text');
        const currentWithdrawText = withdrawText.innerText;
        const updateWithdrawText = (parseFloat( currentWithdrawText) + parseFloat(withdrawInput)).toFixed(2)
        withdrawText.innerText = updateWithdrawText;
        withdrawInput.value = "";
        const balance = document.getElementById("balance-text");
        const currentBalance = balance.innerText;
        const updateBalance = (parseFloat(currentBalance) - parseFloat(withdrawInput)).toFixed(2);
        balance.innerText = updateBalance;

    }
})
