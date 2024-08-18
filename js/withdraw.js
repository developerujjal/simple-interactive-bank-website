/* 
1. Select the element, where we wanna add event handlyer
2. Selelct the input field and get the value;
3. Selelct the element where input field value will added and get the value;
4. Now add them togather withdrawField value and input field value and also add them into the withdrawTotalElement

5. Select the element where the Balance field, and get the value
6. make them like: balaceValue - withdrawValue;
7. Add this variable to the withdrawBalace section

8. for "", we have to setup a withdrawValue string.
*/

document.getElementById("btn-withdraw").addEventListener("click", function(){
    let withdrawField = document.getElementById("withdraw-field");
    let withdrawValueString = withdrawField.value;
    let withdrawValue = parseFloat(withdrawValueString);

    if(withdrawValue <= 0 || isNaN(withdrawValue) === true){
        alert("Please provide a Valid Number!");
        withdrawField.value = "";
        return;
    }
   
    let withdrawTotalEelement = document.getElementById("withdraw-total");
    let withdrawTotalValueSting = withdrawTotalEelement.innerText;
    let withdrawTotalValue = parseFloat(withdrawTotalValueSting);

    let currentWithdrawBalance = withdrawTotalValue + withdrawValue;

    withdrawTotalEelement.innerText = currentWithdrawBalance;
    

    let balanceElement = document.getElementById("balance-field");
    let balanceValueString = balanceElement.innerText;
    let balanceValue = parseFloat(balanceValueString);

    if(balanceValue <= withdrawValue){
        alert("You don't have enough Money. Please deposit Now!");
        withdrawTotalEelement.innerText = withdrawTotalValueSting;

        withdrawField.value = '';

        return;
    }

    let currectBalanceAfterWithdraw = balanceValue - withdrawValue;

    balanceElement.innerText = currectBalanceAfterWithdraw;


    withdrawField.value = '';

})