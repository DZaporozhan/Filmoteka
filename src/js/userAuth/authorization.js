import refs from '../refs';
import {
  getAuth,
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
import { firebaseConfig } from './firebaseConfig';


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// export default class User {
//     constructor(userData) {
//         this.userData = userData;
//     }

//     create() {
//     createUserWithEmailAndPassword(auth, this.userData.email, this.userData.password)
//       .then(userCredential => {
//         const user = userCredential.user;

//         set(ref(db, 'users/' + user.uid + '/auth/'), this.userData);

//         updateProfile(auth.currentUser, {
//           displayName: `${this.userData.name}`,
//         });

//         alert(`User ${this.userData.name} created`);

//         signOut(auth).then(() => {
//           refs.userLibrary.classList.add('hidden-tab');
//         });
//       })
//       .catch(error => {
//         alert(error.code);
//       });
//   }
//     logIn() {
//     const user = auth.currentUser;

//     if (!this.userData.email || !this.userData.pass) {
//       alert('Please enter your email and password');
//       return;
//     }

//     signInWithEmailAndPassword(auth, this.userData.email, this.userData.pass)
//       .then(userCredential => {
//         const user = userCredential.user;

//         refs.userLibrary.classList.remove('hidden-tab');

//         alert(`User ${user.displayName} signed in`);
//       })
//       .catch(error => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   }
//   }
