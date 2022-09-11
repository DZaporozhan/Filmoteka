const spinnerEl = document.querySelector('.backdrop-spinner');

function onSpinnerEnabled() {
  return spinnerEl.classList.remove('visually-hidden');
}
function onSpinnerDisabled() {
  return spinnerEl.classList.add('visually-hidden');
}

export { onSpinnerEnabled, onSpinnerDisabled };
