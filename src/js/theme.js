const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

export default toggle.addEventListener('click', () => {
  body.classList.toggle('dark')
    ? (toggle.firstElementChild.className = 'far fa-moon')
    : (toggle.firstElementChild.className = 'far fa-sun');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkTheme', 'true');
  } else {
    localStorage.removeItem('darkTheme');
  }
});

// let theme = localStorage.getItem('darkTheme');
// export function checkTheme(theme) {
//   if (theme === 'true') {
//     body.classList.add('dark');
//   }
//   return;
// }

// checkTheme();
// const body = document.querySelector('body');
// const toggle = document.querySelector('.toggle');

// export default toggle.addEventListener('click', () => {
//   body.classList.toggle('dark')
//     ? (toggle.firstElementChild.className = 'far fa-moon')
//     : (toggle.firstElementChild.className = 'far fa-sun');
// });
