const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

if(localStorage.getItem('theme') === 'light'){
  body.classList.remove('theme-dark');
  body.classList.add('theme-light');
  toggleBtn.textContent = '🌞';
} else {
  body.classList.remove('theme-light');
  body.classList.add('theme-dark');
  toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  if(body.classList.contains('theme-light')){
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    toggleBtn.textContent = '🌞';
    localStorage.setItem('theme', 'light');
  }
});
