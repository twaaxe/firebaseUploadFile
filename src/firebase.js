// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from 'firebase/storage' //basiquement le storage de firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY7o66Bm_8XR73AzjnDCUolsTjipd0w5U",
    authDomain: "react-music-app-5ca31.firebaseapp.com",
    projectId: "react-music-app-5ca31",
    storageBucket: "react-music-app-5ca31.appspot.com",
    messagingSenderId: "501960028085",
    appId: "1:501960028085:web:60c3f3e2c058a099d573fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

