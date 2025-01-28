document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita la recarga de la página
    
    const formData = new FormData(this);

    // Envía los datos a Formsubmit usando Fetch API
    fetch("https://formsubmit.co/yoallisanto@gmail.com", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("success-message").style.display = "block"; // Muestra el mensaje de éxito
            this.reset(); // Limpia el formulario
        } else {
            alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo :(");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al enviar tu mensaje :(");
    });
});