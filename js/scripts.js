// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Countdown timer
function updateCountdown() {
    const weddingDate = new Date('May 30, 2026 12:30:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = days.toString().padStart(2, '0');
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Load sections dynamically
fetch('sections/nav.html')
    .then(response => response.text())
    .then(data => document.getElementById('nav-placeholder').innerHTML = data);

fetch('sections/hero.html')
    .then(response => response.text())
    .then(data => document.getElementById('hero-placeholder').innerHTML = data);

fetch('sections/nosotros.html')
    .then(response => response.text())
    .then(data => document.getElementById('nosotros-placeholder').innerHTML = data);

fetch('sections/evento.html')
    .then(response => response.text())
    .then(data => document.getElementById('evento-placeholder').innerHTML = data);

fetch('sections/transporte.html')
    .then(response => response.text())
    .then(data => document.getElementById('transporte-placeholder').innerHTML = data);

fetch('sections/galeria.html')
    .then(response => response.text())
    .then(data => document.getElementById('galeria-placeholder').innerHTML = data);

fetch('sections/regalos.html')
    .then(response => response.text())
    .then(data => document.getElementById('regalos-placeholder').innerHTML = data);

fetch('sections/confirmar.html')
    .then(response => response.text())
    .then(data => document.getElementById('confirmar-placeholder').innerHTML = data);

fetch('sections/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);