const footerButtomEl = document.querySelector('.footer__btn');
const backdropFooterEl = document.querySelector('.backdrop');


footerButtomEl.addEventListener('click', handleOnOpenModal);
backdropFooterEl.addEventListener('click', handleonCloseModal);
document.addEventListener('keydown', handleonCloseByEscape);
//

function handleOnOpenModal() {
    backdropFooterEl.classList.remove('is-hidden');
}

function handleonCloseModal(e) {
    const closeByButton = e.target.classList.contains('backdrop__button');
    const closeByBackdrop = e.target.classList.contains('backdrop');
    if (!closeByButton && !closeByBackdrop) {
        return;
    } else {
        backdropFooterEl.classList.add('is-hidden');
    };
}

function handleonCloseByEscape(event) {
    if (event.code === 'Escape') {
        backdropFooterEl.classList.add('is-hidden');
    };
};

export { handleOnOpenModal, handleonCloseByEscape, handleonCloseModal };