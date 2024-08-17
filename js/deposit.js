// step 1: select the button, where we wanna make a event handller

document.getElementById("btn-deposit").addEventListener("click", function(){
    // step 2: select the input field element and get the value

    let depositElement = document.getElementById("deposit-field");
    let depositValue = depositElement.value;
    

    // step 3: select the depost total element and get the value
    // Note: for non-input(input and textarea), we have to use innerText to get the value;

    let depositTotalElement = document.getElementById("deposit-total");
    let depositTotalValue = depositTotalElement.innerText;

    // step 4: add the new value of depositTotalValue 

    depositTotalElement.innerText = depositValue;
})