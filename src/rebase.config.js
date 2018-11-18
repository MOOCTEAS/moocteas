import Rebase from 're-base';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './firebase.config.js';

const app = firebase.initializeApp({
  apiKey: FIREBASE_CONFIG.apiKey,
  authDomain: FIREBASE_CONFIG.authDomain,
  databaseURL: FIREBASE_CONFIG.databaseURL,
  storageBucket: FIREBASE_CONFIG.storageBucket,
});

const db = app.database();

export const base = Rebase.createClass(db);
