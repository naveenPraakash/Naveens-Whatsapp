// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


  const firebaseConfig = {
    apiKey: "AIzaSyB1lx3ePYDu78plOEipg43_UTU8TlPaZLQ",
    authDomain: "whatsapp-17a33.firebaseapp.com",
    projectId: "whatsapp-17a33",
    storageBucket: "whatsapp-17a33.appspot.com",
    messagingSenderId: "187013041357",
    appId: "1:187013041357:web:dead5dd07a83448b7fed84",
    measurementId: "G-DYD1LT36LR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider };
  export default db;