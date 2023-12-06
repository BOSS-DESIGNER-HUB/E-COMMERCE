// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries   vvnb

// Your web app's Firebase configuration    
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt6OI-4OY6TM_ZjX6vmKK8SSVvIqRaEdQ",
    authDomain: "boss-designer-hub.firebaseapp.com",
    projectId: "boss-designer-hub",
    storageBucket: "boss-designer-hub.appspot.com",
    messagingSenderId: "786401416233",
    appId: "1:786401416233:web:991f75d1e8218c830df838",
    measurementId: "G-ZNLGXZ6ZBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);