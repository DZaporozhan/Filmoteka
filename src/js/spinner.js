import refs from './refs';

function onSpinnerEnabled() {
  return refs.spinnerEl.classList.remove('visually-hidden');
}
function onSpinnerDisabled() {
  return refs.spinnerEl.classList.add('visually-hidden');
}
///////////////////===SPINNER TEST ===//////////////////
onSpinnerEnabled();
setTimeout(() => {
  onSpinnerDisabled();
}, 2000);
/////////////////////////////////////////////////////
export { onSpinnerEnabled, onSpinnerDisabled };
