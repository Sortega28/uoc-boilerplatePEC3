import "../../style.css";

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  // Estado inicial
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  Array.from(mobileMenu.querySelectorAll('a')).forEach(link => link.setAttribute('tabindex', '-1'));

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // Cerrar menú
      mobileMenu.style.maxHeight = '0';
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      Array.from(mobileMenu.querySelectorAll('a')).forEach(link => link.setAttribute('tabindex', '-1'));
    } else {
      // Abrir menú
      mobileMenu.classList.remove('hidden'); // ← quitar hidden para mostrar
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      Array.from(mobileMenu.querySelectorAll('a')).forEach(link => link.setAttribute('tabindex', '0'));
    }
  });
}
