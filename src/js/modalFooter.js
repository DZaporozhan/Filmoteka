import refs from './refs';

refs.footerButtomEl.addEventListener('click', handleOnOpenModal);
refs.backdropFooterEl.addEventListener('click', handleonCloseModal);
document.addEventListener('keydown', handleonCloseByEscape);
//

function handleOnOpenModal() {
  refs.backdropFooterEl.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
}

function handleonCloseModal(e) {
  const closeByButton = e.target.classList.contains('backdrop__button');
  const closeByBackdrop = e.target.classList.contains('backdrop');
  refs.body.classList.remove('no-scroll');
  if (!closeByButton && !closeByBackdrop) {
    return;
  } else {
    refs.backdropFooterEl.classList.add('is-hidden');
  }
}

function handleonCloseByEscape(event) {
  if (event.code === 'Escape') {
    refs.backdropFooterEl.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
}

export { handleOnOpenModal, handleonCloseByEscape, handleonCloseModal };
