import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHVlVpTY4-o5L9iRjXCAd2bPonfduw2JU",
    authDomain: "clone-bd019.firebaseapp.com",
    projectId: "clone-bd019",
    storageBucket: "clone-bd019.appspot.com",
    messagingSenderId: "106733728083",
    appId: "1:106733728083:web:db186bdbd358c9463171a6",
    measurementId: "G-HPFDH481T0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export {db ,auth}
