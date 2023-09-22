import {  initializeApp } from "firebase/app";
import {  getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAQ2w2vKR1t47LryjwUtV7oxFQlDBZuUwQ",
    authDomain: "cocoverano-8df51.firebaseapp.com",
    projectId: "cocoverano-8df51",
    storageBucket: "cocoverano-8df51.appspot.com",
    messagingSenderId: "591448352271",
    appId: "1:591448352271:web:0219e04a2acd69f637a57a",
    measurementId: "G-DCNJ0QKGDG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
    app,
    analytics
}