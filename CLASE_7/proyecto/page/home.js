
// Función para alternar entre el modo oscuro y claro
const toggleDarkMode = () => {
document.body.classList.toggle('dark-mode');
const isDarkMode = document.body.classList.contains('dark-mode');

   // Cambia el texto del botón según el estado del modo oscuro
const btn = document.getElementById('dark-mode-toggle');
btn.textContent = isDarkMode ? '⭐️' : '🌙';

   // Almacena la preferencia del usuario en localStorage
localStorage.setItem('dark-mode', isDarkMode);
};

// Función que se ejecuta al cargar la página
window.addEventListener('DOMContentLoaded', () => {
const btn = document.getElementById('dark-mode-toggle');

   // Recuperar la preferencia de modo oscuro almacenada
const darkModePreference = localStorage.getItem('dark-mode') === 'true';

// Aplicar el modo oscuro si la preferencia existe
if (darkModePreference) {
document.body.classList.add('dark-mode');
}

// Establecer el texto inicial del botón según la preferencia
btn.textContent = darkModePreference ? '⭐️' : '🌙';
});

 // Escuchar el clic del botón para alternar el modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode); 

// Botones de categorias que llevan al selector en pagina de tienda


document.getElementById("category-all").addEventListener("click", function() {
window.location.href = "productos.html?selected=all";
});


document.getElementById("category-mountain").addEventListener("click", function() {
window.location.href = "productos.html?selected=Mountain";
});


document.getElementById("category-road").addEventListener("click", function() {
window.location.href = "productos.html?selected=Road";
});


document.getElementById("category-city").addEventListener("click", function() {
window.location.href = "productos.html?selected=City";
});

document.getElementById("category-bmx").addEventListener("click", function() {
window.location.href = "productos.html?selected=BMX";
});
