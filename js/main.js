document.addEventListener('DOMContentLoaded', function() {
    const glassCheckbox = document.getElementById('glass');
    const searchbox = document.querySelector('.searchbox');

    glassCheckbox.addEventListener('change', function() {
      if (this.checked) {
        searchbox.style.display = 'flex';
      } else {
        searchbox.style.display = 'none';
      }
    });
});
