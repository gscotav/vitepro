// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCms-BJVmJd9bF6zM3MtZgXBOQ5QJC5qEQ",
  authDomain: "massir-app.firebaseapp.com",
  projectId: "massir-app",
  storageBucket: "massir-app.appspot.com",
  messagingSenderId: "459264323872",
  appId: "1:459264323872:web:de1fb724f98d2626ae2745",
  measurementId: "G-55RZ6QTWZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;