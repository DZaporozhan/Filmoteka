import refs from '../refs';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, ref, set, remove } from 'firebase/database';
import { onSpinnerDisabled, onSpinnerEnabled } from '../spinner';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

refs.logOut.addEventListener('click', onLogOut);
refs.toLogInTab.addEventListener('click', toLogInLink);
refs.toSignUpTab.addEventListener('click', toSignUpLink);
refs.toLogIn.addEventListener('click', toLogInLink);
refs.toSignUp.addEventListener('click', toSignUpLink);
refs.openAuth.addEventListener('click', openModalAuth);
refs.backdropAuth.addEventListener('click', closeModalAuth);
refs.signInForm.addEventListener('submit', submitAuth);
refs.signUpForm.addEventListener('submit', submitRegister);

document.addEventListener('keydown', closeModalAuth);

function onLogOut() {
  const user = auth.currentUser;

  signOut(auth).then(() => {
    location.reload();
  });

  alert('You are logged out');
}

function closeModalAuth(event) {
  if (
    event.target.type === 'button' ||
    event.target.type === 'email' ||
    event.target.type === 'password' ||
    event.target.type === 'text' ||
    event.code === 'Enter'
  ) {
    return;
  } else if (event.target.type === 'submit') {
  } else if (event.code === 'Escape') {
    refs.backdropAuth.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  } else {
    refs.backdropAuth.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
  // console.log(event.target)
}

function openModalAuth() {
  refs.backdropAuth.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
}
onAuthStateChanged(auth, user => {
  if (user) {
    refs.library.classList.remove('hidden-item');
    refs.openAuth.classList.add('hidden-item');
    refs.logOut.classList.remove('hidden-item');

    // Включает My library
  } else {
    refs.library.classList.add('hidden-item');
    refs.openAuth.classList.remove('hidden-item');
    refs.logOut.classList.add('hidden-item');
    // User is signed out
    // ...
  }
});

function submitAuth(e) {
  e.preventDefault();
  const user = auth.currentUser;
  const userData = {
    email: document.getElementById('auth-email').value,
    pass: document.getElementById('auth-password').value,
  };
  function openModalAuth() {
    refs.backdropAuth.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');

    if (!userData.email || !userData.pass) {
      alert('Please enter your email and password');
      return;
    }
    onSpinnerEnabled();
    signInWithEmailAndPassword(auth, userData.email, userData.pass)
      .then(userCredential => {
        const user = userCredential.user;

        refs.library.classList.remove('hidden-item');
        onSpinnerDisabled();
        // refs.backdropFooterEl.classList.add('is-hidden')
        userData.email = '';
        userData.pass = '';

        alert(`User ${user.displayName} signed in`);
        location.reload();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }
}
function submitRegister(e) {
  e.preventDefault();

  updateProfile(auth.currentUser, {
    displayName: `${userData.name}`,
  });

  onSpinnerEnabled();
  createUserWithEmailAndPassword(auth, userData.email, userData.pass)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });

  alert(`User ${userData.name} created`);
  onSpinnerDisabled();
  signOut(auth).then(() => {
    refs.library.classList.add('hidden-item');
  });
  userData.name = '';
  userData.pass = '';
  userData.email = '';
  location.reload();
}

function toLogInLink(e) {
  e.preventDefault();
  refs.modalSignUp.classList.add('hidden-item');
  refs.modalSignIn.classList.remove('hidden-item');
}

function toSignUpLink(e) {
  e.preventDefault();
  refs.modalSignUp.classList.remove('hidden-item');
  refs.modalSignIn.classList.add('hidden-item');
}

//////////////////////////////////////

refs.toLogInTab.addEventListener('click', toLogInLink);
refs.toSignUpTab.addEventListener('click', toSignUpLink);
refs.toLogIn.addEventListener('click', toLogInLink);
refs.toSignUp.addEventListener('click', toSignUpLink);

function toLogInLink(e) {
  e.preventDefault();
  refs.modalSignUp.classList.add('hidden-item');

  refs.modalSignIn.classList.remove('hidden-item');
}

function toSignUpLink(e) {
  e.preventDefault();
  refs.modalSignUp.classList.remove('hidden-item');

  refs.modalSignIn.classList.add('hidden-item');
}
