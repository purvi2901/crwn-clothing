
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// import { getFirestore, getDocFromCache, doc, getDoc } from 'firebase/firestore'
// import { collection, query, where, getDocs } from "firebase/firestore";




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
// console.log(auth);
export const database = firebase.database();
// console.log(firestore);
// const db = getFirestore();

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;


//     console.log(userAuth);
//     // const colRef = collection(db, `users/${userAuth.uid}`);
//     // const docRef = doc(db, "users", `${userAuth.uid}`);
//     // const docsSnap = await getDoc(docRef);
//     // docSnap.data();

//     const userRef = doc(db, "users", `${userAuth.uid}`);
//     const docSnap = await getDoc(userRef);
//     console.log(docSnap);
//     if (docSnap.exists()) {
//         // Convert to City object
//         const userdata = docSnap.data();
//         // Use a City instance method
//         console.log(userdata);
//     } else {
//         console.log("No such document!");
//         const { displayName, email } = userAuth;
//         const createdAt = new Date();
//         try {
//           await userRef.set({
//             displayName,
//             email,
//             createdAt,
//             ...additionalData
//           });
//         } catch (error) {
//           console.log('error creating user', error.message);
//         }
//       }
    
//       return userRef;
//     };




    // const q = query(collection(db, "users"));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });

// };




// export const provider = new firebase.auth.GoogleAuthProvider(); 
const provider = new firebase.auth.GoogleAuthProvider();
// console.log(provider);
provider.setCustomParameters({ prompt: 'select_account' });

// console.log(auth.signInWithPopup(provider).catch(alert))
// export const signInWithGoogle = () =>auth.signInWithPopup(provider);
// export const signInWithRedirect = () => auth.signInWithRedirect(provider);

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
//   export default firebase;





