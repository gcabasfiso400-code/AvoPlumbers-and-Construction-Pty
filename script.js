document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  const form = document.querySelector('#contact-form');
  const statusText = document.querySelector('#contact-status');

  if (form && statusText) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      statusText.textContent = 'Sending your enquiry...';
      statusText.style.color = '#2563eb';

      window.setTimeout(() => {
        statusText.textContent = 'Thank you! Your enquiry has been sent successfully.';
        statusText.style.color = '#16a34a';
        form.reset();
      }, 650);
    });
  }
});
