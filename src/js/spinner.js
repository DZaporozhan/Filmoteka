import refs from './refs';

// window.addEventListener('load', onSpinnerEnabled);

// function onSpinnerEnabled() {
//   refs.spinnerEl.classList.add('visually-hidden');
//   setTimeout(() => {
//     refs.spinnerEl.remove();
//     window.removeEventListener('load', onSpinnerEnabled);
//   }, 600);
// }

function onSpinnerEnabled() {
  return refs.spinnerEl.classList.remove('visually-hidden');
}
function onSpinnerDisabled() {
  return refs.spinnerEl.classList.add('visually-hidden');
}
export { onSpinnerEnabled, onSpinnerDisabled };

const logoRef = document.querySelector('.header__logo--icon');
logoRef.addEventListener('click', e => {
  e.preventDefault();
  onSpinnerEnabled();
  setTimeout(() => {
    onSpinnerDisabled();
  }, 2000);
});
