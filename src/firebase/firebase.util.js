
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyCk3ZwikEFvmUMRYUxnhESm1szDkOYuhFc",
    authDomain: "ecomerce-crwn-c90fd.firebaseapp.com",
    projectId: "ecomerce-crwn-c90fd",
    storageBucket: "ecomerce-crwn-c90fd.appspot.com",
    messagingSenderId: "790090351832",
    appId: "1:790090351832:web:1a793d91c4f1fa01e6c3ad",
    measurementId: "G-KCQDL8KMFP"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
console.log(auth);
export const database = firebase.database();





// export const provider = new firebase.auth.GoogleAuthProvider(); 
const provider = new firebase.auth.GoogleAuthProvider();
// console.log(provider);
provider.setCustomParameters({ prompt: 'select_account' });
// console.log(auth.signInWithPopup(provider).catch(alert))
export const signInWithGoogle = () =>auth.signInWithPopup(provider);
// export const signInWithRedirect = () => auth.signInWithRedirect(provider);

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider).then((res) => {
//       console.log(res.user)
//     }).catch((error) => {
//       console.log(error.message)
//     })
//   }
//   export default firebase;





