import refs from '../refs';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
  deleteUser,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
  import { getDatabase, ref, set, remove } from 'firebase/database'

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebaseConfig";
import { User } from "./authorization"
import { exit } from 'process';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// const openAuth = document.querySelector('.open-auth')
// const backdropFooterEl = document.querySelector('.backdrop')
// const logOut = document.querySelector('.exit')

refs.logOut.addEventListener('click', onLogOut)

function onLogOut(){
  const user = auth.currentUser;

    signOut(auth).then(() => {

      location.reload();
    });

    alert('You are logged out');
}

refs.openAuth.addEventListener('click', openModalAuth)
refs.backdropAuth.addEventListener('click', closeModalAuth)
document.addEventListener('keydown', closeModalAuth);

function closeModalAuth(event) {
  if (event.target.type === "button"|| event.target.type=== "email" ||event.target.type=== "password" || event.target.type=== "text") {
    return
  }
  else if (event.code === 'Escape') {
    refs.backdropAuth.classList.add('is-hidden')
    refs.body.classList.remove('no-scroll');
  } else {
    refs.backdropAuth.classList.add('is-hidden')
    refs.body.classList.remove('no-scroll');
  }
  // refs.backdropAuth.classList.add('is-hidden')
  //   refs.body.classList.remove('no-scroll');
  console.log(event.target.type)
}

function openModalAuth() {
  refs.backdropAuth.classList.remove('is-hidden')
    refs.body.classList.add('no-scroll');

}
// const library =document.querySelector('#library')
onAuthStateChanged(auth, user => {
  if (user) {
    refs.library.classList.remove('hidden-item');
    refs.openAuth.classList.add('hidden-item')
    refs.logOut.classList.remove('hidden-item')

    // Включает My library
  } else {
    refs.library.classList.add('hidden-item');
    refs.openAuth.classList.remove('hidden-item')
    refs.logOut.classList.add('hidden-item')
    // User is signed out
    // ...
  }
});

// const signIn = {
//     // openSignInBtn: document.querySelector('#login-btn'),
//   toLogIn: document.querySelector('#to-login'),
//     modalSignIn: document.querySelector('#auth'),
//     signInForm: document.querySelector('#auth-form')
// }

// signIn.openSignInBtn.addEventListener('click', openModal)
refs.signInForm.addEventListener('submit', submitAuth)

function submitAuth(e){
e.preventDefault()
    const user = auth.currentUser;
    const userData = {
        email: document.getElementById("auth-email").value,
        pass: document.getElementById("auth-password").value,

    }

    if (!userData.email || !userData.pass) {
      alert('Please enter your email and password');
      return;
    }
signInWithEmailAndPassword(auth, userData.email, userData.pass)
      .then(userCredential => {
        const user = userCredential.user;

        refs.library.classList.remove('hidden-item');
        // refs.backdropFooterEl.classList.add('is-hidden')
        userData.email.value = ''
        userData.pass.value = ''

        alert(`User ${user.displayName} signed in`);
        location.reload();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
      });

// const user = new User();

//     user.logIn(userData);
}

// function openModal() {
//     // signIn.modalSignIn.classList.toggle('is-hidden')

// }

// const signUp = {
//     // openSignUpBtn: document.querySelector('#register-btn'),
//   toSignUp : document.querySelector('#to-signup'),
//     modalSignUp: document.querySelector('#reg'),
//     signUpForm: document.querySelector('#reg-form')
// }

refs.signUpForm.addEventListener('submit', submitRegister)
// signUp.openSignUpBtn.addEventListener('click', openModalReg)

function submitRegister(e) {
    e.preventDefault()
    // const email = document.getElementById("register-email").value;
    // const password = document.getElementById("register-password").value;

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById("register-email").value,
        pass: document.getElementById("register-password").value,

    }

createUserWithEmailAndPassword(auth, userData.email, userData.pass)
      .then(userCredential => {
        const user = userCredential.user;

        set(ref(db, 'users/' + user.uid + '/auth/'), userData);

        updateProfile(auth.currentUser, {
          displayName: `${userData.name}`,
        });

        alert(`User ${userData.name} created`);

        signOut(auth).then(() => {
          refs.library.classList.add('hidden-item');
        });
          userData.name.value = ''
        userData.pass.value = ''
          userData.email.value = ''
              location.reload();

      })
  .catch(error => {
                const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });

// const user = new User(userData);

//     user.create();
//      e.currentTarget.reset();
}
// function openModalReg() {

//     // signUp.modalSignUp.classList.toggle('is-hidden')
// }

//////////////////////////////////////

refs.toLogInTab.addEventListener('click',toLogInLink)
refs.toSignUpTab.addEventListener('click', toSignUpLink)
refs.toLogIn.addEventListener('click',toLogInLink)
refs.toSignUp.addEventListener('click', toSignUpLink)

function toLogInLink(e) {
  e.preventDefault()
refs.modalSignUp.classList.add('hidden-item')

refs.modalSignIn.classList.remove('hidden-item')
}

function toSignUpLink(e) {
  e.preventDefault()
refs.modalSignUp.classList.remove('hidden-item')

refs.modalSignIn.classList.add('hidden-item')
}
