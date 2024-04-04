document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggleButton');

  toggleButtons.forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
      const targetId = toggleButton.getAttribute('data-target');
      const content = document.getElementById(targetId);

      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        toggleButton.textContent = '-';
      } else {
        content.style.display = 'none';
        toggleButton.textContent = '+';
      }
    });
  });
});