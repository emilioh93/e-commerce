import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwQOCh-_6c8TE1HP17P5Fzm4M53Den8Cs",
  authDomain: "e-commerce-8fde5.firebaseapp.com",
  projectId: "e-commerce-8fde5",
  storageBucket: "e-commerce-8fde5.appspot.com",
  messagingSenderId: "760978478561",
  appId: "1:760978478561:web:0ed6ed54c5e90d73456ea0",
  measurementId: "G-EN8PD97MYP",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
