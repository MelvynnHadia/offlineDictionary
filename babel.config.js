import * as firebase from 'firebase';
require(@firebase/firestore)

  var firebaseConfig = {
    apiKey: "AIzaSyAZ7557ZPEvB9N4v1A0s8CG5ujk-FluIwU",
    authDomain: "avengers-554e8.firebaseapp.com",
    databaseURL: "https://avengers-554e8-default-rtdb.firebaseio.com",
    projectId: "avengers-554e8",
    storageBucket: "avengers-554e8.appspot.com",
    messagingSenderId: "91091749150",
    appId: "1:91091749150:web:fb6c76d895973f4de2210f"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();