// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// Pestañas de la carta
const tabs = document.querySelectorAll('.menu-tab');
const rows = document.querySelectorAll('.dish-row');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');

    rows.forEach(row => {
      row.hidden = row.dataset.panel !== target;
    });
  });
});

// Cabecera: sombra al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 18px rgba(44,35,32,.12)' : 'none';
});
