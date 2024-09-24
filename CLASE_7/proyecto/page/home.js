const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Cambia el texto del botón
    const btn = document.getElementById('dark-mode-toggle');
    btn.textContent = isDarkMode ? '⭐️' : '🌙';

    // Almacena la preferencia del usuario
    localStorage.setItem('dark-mode', isDarkMode);
};

  // Recuperar la preferencia de modo oscuro al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    if (darkModePreference) {
document.body.classList.add('dark-mode');
document.getElementById('dark-mode-toggle').textContent = '⭐️';
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);