/**
 * Script de gestion globale de la navigation (Visio-Tech)
 */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-content');
  const barsIcon = document.querySelector('.navicon');
  const xmarkIcon = document.querySelector('._navicon');
  const navLinks = document.querySelectorAll('.navbar-content a');

  if (!navbar || !barsIcon || !xmarkIcon) return;

  // Toggle du menu mobile
  const toggleMenu = (show) => {
    const isExpanded = typeof show === 'boolean' ? show : !navbar.classList.contains('respon');
    
    navbar.classList.toggle('respon', isExpanded);
    barsIcon.classList.toggle('respon', isExpanded);
    xmarkIcon.classList.toggle('respon', isExpanded);
    
    barsIcon.setAttribute('aria-expanded', isExpanded);
    xmarkIcon.setAttribute('aria-expanded', isExpanded);
  };

  barsIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(true);
  });

  xmarkIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(false);
  });

  // Fermer le menu lors du clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMenu(false);
      }
    });
  });

  // Fermer le menu si clic à l'extérieur
  document.addEventListener('click', (event) => {
    if (navbar.classList.contains('respon') && 
        !navbar.contains(event.target) && 
        !barsIcon.contains(event.target) && 
        !xmarkIcon.contains(event.target)) {
      toggleMenu(false);
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbar.classList.contains('respon')) {
      toggleMenu(false);
    }
  });
});