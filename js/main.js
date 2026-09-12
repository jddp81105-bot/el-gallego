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

// Scroll-spy: subraya en el menú la sección visible
const navLinkMap = {};
nav.querySelectorAll('a').forEach(a => {
  const id = a.getAttribute('href').slice(1);
  navLinkMap[id] = a;
});
const spySections = Object.keys(navLinkMap)
  .map(id => document.getElementById(id))
  .filter(Boolean);

function updateNavSpy() {
  const scrollPos = window.scrollY + 110;
  let current = spySections.length ? spySections[0].id : null;
  spySections.forEach(sec => {
    if (sec.offsetTop <= scrollPos) current = sec.id;
  });
  Object.keys(navLinkMap).forEach(id => {
    navLinkMap[id].classList.toggle('active', id === current);
  });
}
window.addEventListener('scroll', updateNavSpy, { passive: true });
window.addEventListener('resize', updateNavSpy);
window.addEventListener('load', updateNavSpy);
updateNavSpy();
