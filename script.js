document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.homepage').style.display = 'block';
});
