import firebase from 'firebase';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAlvCWwh2wfPN7dVEojBSshyXveeYwOp9s",
  authDomain: "moocteas-aed7b.firebaseapp.com",
  databaseURL: "https://moocteas-aed7b.firebaseio.com",
  projectId: "moocteas-aed7b",
  storageBucket: "moocteas-aed7b.appspot.com",
  messagingSenderId: "933003854907"
};

export const facebookAuthenticationProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthenticationProvider = new firebase.auth.GoogleAuthProvider();
export const twitterAuthenticationProvider = new firebase.auth.TwitterAuthProvider();
