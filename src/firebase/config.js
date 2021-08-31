import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCNuoZYFM4v5Qs-mFO7LwBpXdwhFu55ROM",
    authDomain: "olx-demo-dcc33.firebaseapp.com",
    projectId: "olx-demo-dcc33",
    storageBucket: "olx-demo-dcc33.appspot.com",
    messagingSenderId: "919825420953",
    appId: "1:919825420953:web:73182c0c14b7de4fad1e08",
    measurementId: "G-HWZQZ8XK28"
  };

export default firebase.initializeApp(firebaseConfig);
