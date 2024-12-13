function submitForm(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("userName").textContent = username;
    document.getElementById("signupForm").reset();
}

