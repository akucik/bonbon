// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKRM2VxpvV1Fy2AEjzuhK71saGvTYcukM",
  authDomain: "bonbon-7b5bf.firebaseapp.com",
  projectId: "bonbon-7b5bf",
  storageBucket: "bonbon-7b5bf.appspot.com",
  messagingSenderId: "585421387104",
  appId: "1:585421387104:web:f3003bfff8972feab85a05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
