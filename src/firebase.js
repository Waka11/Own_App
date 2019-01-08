import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDanxWkaS-Mniir1sPnSEt5YPc2zcEpG1I",
    authDomain: "own-app-b1a2a.firebaseapp.com",
    databaseURL: "https://own-app-b1a2a.firebaseio.com",
    projectId: "own-app-b1a2a",
    storageBucket: "own-app-b1a2a.appspot.com",
    messagingSenderId: "1036162061249"
};

const firebaseApp = firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebaseApp,
    database,
    googleAuthProvider
}
