document.addEventListener('DOMContentLoaded', function() {
    // Validación de email al enviar el formulario
    document.getElementById("personalDataForm").addEventListener("submit", function(event) {
        const emailField = document.getElementById("email");
        const email = emailField.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            event.preventDefault();
        }
    });

    // Alternar entre estilo normal y alto contraste
    const toggleContrastButton = document.getElementById('toggleContrast');
    if (toggleContrastButton) {
        toggleContrastButton.addEventListener('click', function() {
            const defaultStyle = document.getElementById('defaultStyle');
            const highContrastStyle = document.getElementById('highContrastStyle');
            
            if (highContrastStyle.disabled) {
                highContrastStyle.disabled = false;
                defaultStyle.disabled = true;
                this.textContent = 'Cambiar a Estilo Normal';
            } else {
                highContrastStyle.disabled = true;
                defaultStyle.disabled = false;
                this.textContent = 'Cambiar a Alto Contraste';
            }
        });
    } else {
        console.error('Botón de cambio de contraste no encontrado');
    }
});
