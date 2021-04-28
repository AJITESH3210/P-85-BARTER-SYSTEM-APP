import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAMvgwShFDyd3oGA-Qxz-6vA_Wc5a2MYIY",
  authDomain: "barter-app-34870.firebaseapp.com",
  databaseURL: "https://barter-app-34870-default-rtdb.firebaseio.com",
  projectId: "barter-app-34870",
  storageBucket: "barter-app-34870.appspot.com",
  messagingSenderId: "754439053575",
  appId: "1:754439053575:web:bdcb5c54fb96bb966325a2",
  measurementId: "G-NNHRSK19W4"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();