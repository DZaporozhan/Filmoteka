const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  body.classList.toggle('dark')
    ? (toggle.firstElementChild.className = 'far fa-moon')
    : (toggle.firstElementChild.className = 'far fa-sun');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkTheme', 'true');
  } else {
    localStorage.removeItem('darkTheme');
  }
});

let theme = localStorage.getItem('darkTheme');
function checkTheme(theme) {
  if (localStorage.getItem('darkTheme')) {
    body.classList.add('dark');
  }
  return;
}
checkTheme();
