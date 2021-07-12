import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdPNPR1EKA99c9rgxJxmdizCpdq9d2weE",
    authDomain: "whatsapp-858a0.firebaseapp.com",
    projectId: "whatsapp-858a0",
    storageBucket: "whatsapp-858a0.appspot.com",
    messagingSenderId: "560425315036",
    appId: "1:560425315036:web:c97cae4f0fea36e85be219"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };