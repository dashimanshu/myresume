// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYAIHTknS29mn9JkTwfD_3drvx0OcYrvU",
    authDomain: "himanshudas-6ff96.firebaseapp.com",
    projectId: "himanshudas-6ff96",
    storageBucket: "himanshudas-6ff96.appspot.com",
    messagingSenderId: "6319066585",
    appId: "1:6319066585:web:53d942fee6be83f4571dc8",
    measurementId: "G-N55RKS2C86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);