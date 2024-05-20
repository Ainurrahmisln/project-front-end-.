document.addEventListener("DOMContentLoaded", function() {
    var elem = document.getElementById('Dekorasi');
    elem.classList.add('show');
  });
  
  function toggleVisibility(id) {
    var texts = document.querySelectorAll('.text');
    for (var i = 0; i < texts.length; i++) {
      if (texts[i].id === id) {
        texts[i].classList.add('show');
      } else {
        texts[i].classList.remove('show');
      }
    }
  }