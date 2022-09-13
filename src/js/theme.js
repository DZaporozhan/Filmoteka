import refs from './refs';

refs.toggle.addEventListener('change', event => {
  if (refs.body.classList.contains('dark')) {
    refs.body.classList.remove('dark');
    localStorage.removeItem('darkTheme');
  } else {
    refs.body.classList.add('dark');
    localStorage.setItem('darkTheme', 'true');
  }
});

let theme = localStorage.getItem('darkTheme');
function checkTheme(theme) {
  if (localStorage.getItem('darkTheme')) {
    refs.body.classList.add('dark');
    refs.toggle.checked = true;
  }
  return;
}
checkTheme();
