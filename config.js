import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCCJ5MY_O1K5SsxfRky2Y57UGbiU5pF4X0",
  authDomain: "e-ride-c472b.firebaseapp.com",
  projectId: "e-ride-c472b",
  storageBucket: "e-ride-c472b.appspot.com",
  messagingSenderId: "464353828457",
  appId: "1:464353828457:web:d050d6a4a00f85b8200cf8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
