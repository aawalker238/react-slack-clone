import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyACGOIaqMVoWBK482d8BOJYr9Z_UwaFrBg',
  authDomain: 'react-slack-application.firebaseapp.com',
  databaseURL: 'https://react-slack-application.firebaseio.com',
  projectId: 'react-slack-application',
  storageBucket: 'react-slack-application.appspot.com',
  messagingSenderId: '584208420253'
};
firebase.initializeApp(config);

export default firebase;
