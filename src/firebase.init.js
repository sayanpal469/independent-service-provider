// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Yz9oAKpq-SWakknfBBgjx02DtMNcumo",
  authDomain: "independent-servic.firebaseapp.com",
  projectId: "independent-servic",
  storageBucket: "independent-servic.appspot.com",
  messagingSenderId: "707387829808",
  appId: "1:707387829808:web:46712be29deb37e63a07f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth