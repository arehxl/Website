function showMessage() {
    alert("Order now.");
}

document.getElementById("submitButton").addEventListener("click", function() {
  
    const emailInput = document.getElementById("email").value.trim();
    
    const responseMessage = document.getElementById("responseMessage");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput == "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Please enter your email address.";
        return;
    }

    if (!emailRegex.test(emailInput)) {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Invalid email format.";
        return; 
    }

    responseMessage.style.color = "green";
    responseMessage.textContent = "Redirecting...";

    setTimeout(() => {
        window.location.href = "thirdpage.html";
    }, 2000);
    });

document.querySelector('.enter-button').addEventListener('click', (e) => {
    e.preventDefault(); document.querySelector('.landing').style.opacity='0';
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 2000);
    });

    document.querySelector('.fade-button').addEventListener('click', (e) => {
        e.preventDefault(); document.querySelector('.landing').style.opacity='0';
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 2000);
        });