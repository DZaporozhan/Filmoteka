import refs from './refs';

refs.footerButtomEl.addEventListener('click', handleOnOpenModal);
refs.backdropFooterEl.addEventListener('click', handleonCloseModal);
document.addEventListener('keydown', handleonCloseByEscape);
//

function handleOnOpenModal() {
  refs.backdropFooterEl.classList.remove('is-hidden');
}

function handleonCloseModal(e) {
  const closeByButton = e.target.classList.contains('backdrop__button');
  const closeByBackdrop = e.target.classList.contains('backdrop');
  if (!closeByButton && !closeByBackdrop) {
    return;
  } else {
    refs.backdropFooterEl.classList.add('is-hidden');
  }
}

function handleonCloseByEscape(event) {
  if (event.code === 'Escape') {
    refs.backdropFooterEl.classList.add('is-hidden');
  }
}

export { handleOnOpenModal, handleonCloseByEscape, handleonCloseModal };
