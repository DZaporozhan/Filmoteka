
export function authWithEmailAndPassword(email, password) {
    const FIREBASE_KEY = 'AIzaSyBvYbMxb_aZvMON7ACVZpGLOlqleQ5xdkk'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`, {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers:{'Content-Type': 'application/json'}
    }).then(response => response.json()).then(data => data.idToken)
}