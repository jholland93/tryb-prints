import firebase from 'firebase/app';
import  "firebase/auth";

var config = {
    apiKey: "AIzaSyBR1E5loxQz_jA9YvG4HgNFq-nnHYunkkY",
    authDomain: "tryb-prints.firebaseapp.com",
    databaseURL: "https://tryb-prints.firebaseio.com",
    projectId: "tryb-prints",
    storageBucket: "tryb-prints.appspot.com",
    messagingSenderId: "333649716090",
    appId: "1:333649716090:web:27914b671376e870172cc3",
    measurementId: "G-YJG2RN7J95"
  };

  const fire = firebase.initializeApp(config);

export default fire