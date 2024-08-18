// step 1: select the button, where we wanna make a event handller

document.getElementById("btn-deposit").addEventListener("click", function(){
    // step 2: select the input field element and get the value

    let depositElement = document.getElementById("deposit-field");
    let depositValueString = depositElement.value;
    let depositValue = parseFloat(depositValueString);

    if (isNaN(depositValue) === true || depositValue <= 0) {
        alert("Please enter a valid number!");
        depositElement.value = "";
        return;
    }
    
    // step 3: select the depost total element and get the value
    // Note: for non-input(input and textarea), we have to use innerText to get the value;

    let depositTotalElement = document.getElementById("deposit-total");
    let depositTotalValueString = depositTotalElement.innerText;
    let depositTotalValue = parseFloat(depositTotalValueString);
    
    // step 4: get the total value by +
    
    let currentDepositBalance = depositTotalValue + depositValue;
    

    depositTotalElement.innerText = currentDepositBalance;


    // step 5: select the balance field/balance element

    let balanceElement = document.getElementById("balance-field");
    let balanceElementString = balanceElement.innerText;
    let balanceValue = parseFloat(balanceElementString);


    let currentFinalBalance = balanceValue + depositValue;

    balanceElement.innerText = currentFinalBalance;

    


    // last step

    depositElement.value = "";
})