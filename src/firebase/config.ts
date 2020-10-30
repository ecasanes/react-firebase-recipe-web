// eslint-disable-next-line
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config.json';

const firebaseConfig = firebase.initializeApp(config.firebase);

// eslint-disable-next-line
export {
  firebaseConfig as firebase
};
