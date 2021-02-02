import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCZO3GBD49iT1thGidwSYujc1YGM2oMxCU',
  authDomain: 'crwn-db-6f1a7.firebaseapp.com',
  projectId: 'crwn-db-6f1a7',
  storageBucket: 'crwn-db-6f1a7.appspot.com',
  messagingSenderId: '289120407969',
  appId: '1:289120407969:web:041dc7bb26a74c9510fbe0',
  measurementId: 'G-4FKYEQ49SG',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;