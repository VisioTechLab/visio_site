document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const notification = document.getElementById('formNotification');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Validation email basique (regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
      }

      if (!emailRegex.test(email)) {
        showNotification('Veuillez fournir une adresse email valide.', 'error');
        return;
      }

      // Succès de soumission
      showNotification('Merci ! Votre message a été envoyé avec succès. Notre équipe vous recontactera sous 24h.', 'success');
      contactForm.reset();
    });
  }

  function showNotification(msg, type) {
    if (!notification) return;
    notification.textContent = msg;
    notification.className = `form-notification ${type}`;
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 6000);
  }
});
