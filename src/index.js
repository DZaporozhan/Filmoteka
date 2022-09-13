import { onSpinnerEnabled, onSpinnerDisabled } from './js/spinner';
import './js/markupModalMovie';
import './js/refs';
import './js/api-servise';
import './js/cardTemplates';
import './js/serchMovies';
import './js/modalFooter';
import './js/localStorageApi';

///////////////////===SPINNER TEST ===//////////////////
onSpinnerEnabled();
setTimeout(() => {
  onSpinnerDisabled();
}, 2000);
////////////////////////////////////////////////////////
