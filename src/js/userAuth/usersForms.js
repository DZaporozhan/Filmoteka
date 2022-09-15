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
    event.code === 'Enter'||
    event.target === refs.modalSignIn ||
    event.target === refs.signInForm ||
    event.target === refs.modalSignUp ||
    event.target === refs.signUpForm ||
    event.target === refs.formWrap
  ) {
    
    return;
  }else if (event.code === 'Escape') {
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

  refs.backdropAuth.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');

  if (!userData.email || !userData.pass) {
    alert('Please enter your email and password');
    return;
  }

  signInWithEmailAndPassword(auth, userData.email, userData.pass)
    .then(userCredential => {
      const user = userCredential.user;

      refs.library.classList.remove('hidden-item');

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
function submitRegister(e) {
  e.preventDefault();
  const userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('register-email').value,
    pass: document.getElementById('register-password').value,
  };
  refs.modalSignIn.classList.remove('hidden-item')
  
  refs.modalSignUp.classList.add('hidden-item')
  createUserWithEmailAndPassword(auth, userData.email, userData.pass)
    .then(userCredential => {
      const user = userCredential.user;

      set(ref(db, 'users/' + user.uid + '/auth/'), userData);

      updateProfile(auth.currentUser, {
        displayName: `${userData.name}`,
      });
      
      alert(`User ${userData.name} created`);
refs.signUpForm.addEventListener('submit', toLogInLink);
      signOut(auth).then(() => {
        refs.library.classList.add('hidden-item');
      });
      userData.name = '';
      userData.pass = '';
      userData.email = '';
            location.reload();

    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
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
