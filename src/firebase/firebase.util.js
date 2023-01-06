
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
// export const provider = new firebase.auth.GoogleAuthProvider(); 
// console.log(provider);

export const database = firebase.database();



