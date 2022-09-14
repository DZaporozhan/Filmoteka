const refs = {
  searchForm: document.querySelector('#search-form'),
  mainList: document.querySelector('.movieList'),
  warningOnSearch: document.querySelector('#js-input-error'),
  modalFilmInfoRef: document.querySelector('.modal-film'),
  footerButtomEl: document.querySelector('.footer__btn'),
  backdropFooterEl: document.querySelector('.backdrop'),
  spinnerEl: document.querySelector('.backdrop-spinner'),
  backdropFilmRef: document.querySelector('.modal-film__backdrop'),
  body: document.querySelector('body'),

  openAuth: document.querySelector('.open-auth'),
  backdropAuth: document.querySelector('.backdrop-auth'),
  logOut: document.querySelector('.exit'),
  library: document.querySelector('#library'),

  toLogIn: document.querySelector('#to-login'),
  modalSignIn: document.querySelector('#auth'),
  signInForm: document.querySelector('#auth-form'),
  toSignUp: document.querySelector('#to-signup'),
  modalSignUp: document.querySelector('#reg'),
  signUpForm: document.querySelector('#reg-form'),
  toggle: document.querySelector('#theme-switch-toggle'),
  modalQueueBtn: document.querySelector('.modal-film_btn-queue'),
  modalWatchedBtn: document.querySelector('.modal-film_btn-watched'),
  toSignUpTab:document.querySelector('#to-signup-tab'),
  toLogInTab:document.querySelector('#to-login-tab'),
};
export default refs;
