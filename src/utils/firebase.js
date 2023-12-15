// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCFixqD1baxk82kREVtM32Gs6tRtkKuATI",
	authDomain: "netflix-da55e.firebaseapp.com",
	projectId: "netflix-da55e",
	storageBucket: "netflix-da55e.appspot.com",
	messagingSenderId: "199662559885",
	appId: "1:199662559885:web:e27a3dfbd2fc7be7a138c4",
	measurementId: "G-V8NX3CR48W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();