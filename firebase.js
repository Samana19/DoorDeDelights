import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyPXS_qzBbEOq-pGPA2tNacXxmXpCi-Fk",
  authDomain: "doordedelights-8de60.firebaseapp.com",
  projectId: "doordedelights-8de60",
  storageBucket: "doordedelights-8de60.appspot.com",
  messagingSenderId: "515022357322",
  appId: "1:515022357322:web:bf5b33bb50cccaa3f177b3",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };

export default firebase;
