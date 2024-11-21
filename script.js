function showMessage() {
    alert("Order now.");
}

document.getElementById("submitButton").addEventListener("click", function() {
  
    const emailInput = document.getElementById("email").value.trim();
    
    const responseMessage = document.getElementById("responseMessage");

   
    if (emailInput == "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please enter your email address.";
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Invalid email format.";
        return;
    }


    responseMessage.style.color = "green";
    responseMessage.textContent = "Thank you! We will keep you updated.";
});
