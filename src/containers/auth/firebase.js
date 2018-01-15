import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDmxBiBBSM8_lmZniNyVXoLEu9fcX5Z904",
    authDomain: "react-bolao-firebase.firebaseapp.com",
    databaseURL: "https://react-bolao-firebase.firebaseio.com",
    projectId: "react-bolao-firebase",
    storageBucket: "react-bolao-firebase.appspot.com",
    messagingSenderId: "513926736091"
  };

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;