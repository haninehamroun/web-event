function login(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "hamrounhanin801@gmail.com" && password === "1234") {
        document.getElementById("loginMessage").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
    } else {
        alert("Email ou mot de passe incorrect !");
    }
}
