// step 1: add addEventListener to the Button

document.getElementById("submit-btn").addEventListener("click", function(){
   
    // step 2: select the email field element, and get the value

    let emailField = document.getElementById("email-field");
    let emailValue = emailField.value;
    

    //step 3: select the password field element and get the value

    let passwordField = document.getElementById("password-field");
    let passwordValue = passwordField.value;
    

    // step 4: have to compare but it's not recommended. It just for practice. ! Dangerour !

    if(emailValue === ("amarbank@gmail.com") && passwordValue === ("lotsOfMoney")){
        console.log("Valid User");
    }

    else{
        console.log("Invalid User");
    }
})