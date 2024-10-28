const toggleDarkMode = () => {
document.body.classList.toggle('dark-mode');
const isDarkMode = document.body.classList.contains('dark-mode');

const btn = document.getElementById('dark-mode-toggle');
btn.textContent = isDarkMode ? '⭐️' : '🌙';

localStorage.setItem('dark-mode', isDarkMode);
};

window.addEventListener('DOMContentLoaded', () => {
const btn = document.getElementById('dark-mode-toggle');

const darkModePreference = localStorage.getItem('dark-mode') === 'true';

if (darkModePreference) {
document.body.classList.add('dark-mode');
}

btn.textContent = darkModePreference ? '⭐️' : '🌙';
});


document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode); 




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
