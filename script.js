// Seleziona sia hamburger desktop che mobile
const hamburgerDesktop = document.querySelector('.hamburger-menu');
const hamburgerMobile = document.querySelector('.hamburger-menù-mobile');
const sidebar = document.getElementById('sidebar');

// Funzione per toggle sidebar
function toggleSidebar() {
    sidebar.classList.toggle('open');
}

// Aggiungo evento click ad entrambi
if (hamburgerDesktop) {
    hamburgerDesktop.addEventListener('click', toggleSidebar);
}

if (hamburgerMobile) {
    hamburgerMobile.addEventListener('click', toggleSidebar);
}

// Gestione dei sottomenu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
