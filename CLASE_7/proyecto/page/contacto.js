document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const subjectField = document.getElementById("subject");
        const messageField = document.getElementById("message");
        
        const email = emailField.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const responseMessage = document.getElementById("responseMessage");

        // Reset response message
        responseMessage.textContent = '';

        if (!emailPattern.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            event.preventDefault();
        } else {
            event.preventDefault(); // Prevent actual submission for this example
            responseMessage.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Gracias por tu mensaje, ${nameField.value}! Nos pondremos en contacto contigo pronto.
                </div>
            `;
            // Here you can add code to actually submit the form data if needed
        }
    });
});
