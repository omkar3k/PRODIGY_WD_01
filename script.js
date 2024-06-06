document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const messageDiv = document.getElementById('message');
  const navLinks = document.querySelectorAll('.nav-item a');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const message = this.getAttribute('data-message');
      displayAnimatedMessage(message);
    });
  });

  function displayAnimatedMessage(message) {
    messageDiv.innerHTML = '';
    messageDiv.style.opacity = 1; // Ensure message container is visible
    messageDiv.style.animation = 'none'; // Reset animation
    void messageDiv.offsetWidth; // Trigger reflow
    messageDiv.style.animation = 'fadeIn 2s ease-in-out forwards, grow 1s ease-in-out forwards'; // Reapply animation
    [...message].forEach((char, index) => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.05}s`; // Stagger the animation of each letter
      messageDiv.appendChild(span);
    });
  }
});
