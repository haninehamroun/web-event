function submitContactForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && email && message) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").style.display = "none";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

