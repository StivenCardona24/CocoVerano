import { type FirebaseApp, initializeApp } from "firebase/app";
import { type Analytics, getAnalytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ2w2vKR1t47LryjwUtV7oxFQlDBZuUwQ",
  authDomain: "cocoverano-8df51.firebaseapp.com",
  databaseURL: "https://cocoverano-8df51-default-rtdb.firebaseio.com",
  projectId: "cocoverano-8df51",
  storageBucket: "cocoverano-8df51.appspot.com",
  messagingSenderId: "591448352271",
  appId: "1:591448352271:web:0219e04a2acd69f637a57a",
  measurementId: "G-DCNJ0QKGDG"
};

  let _app: FirebaseApp, _analytics: Analytics, _db: Firestore, _auth: Auth, _storage: FirebaseStorage;

  function app() {
    if (!_app) {
      _app = initializeApp(firebaseConfig);
    }
    return _app;
  }
  
  function analytics() {
    if (!_analytics) {
      _analytics = getAnalytics(app());
    }
    return _analytics;
  }
  
  function db() {
    if (!_db) {
      _db = getFirestore(app());
    }
    return _db;
  }
  
  function auth() {
    if (!_auth) {
      _auth = getAuth(app());
    }
    return _auth;
  }

  function storage() {
    if (!_storage) {
      _storage = getStorage(app());
    }
    return _storage;
  }
  
  export {
    app as getApp,
    analytics as getAnalytics,
    db as getDb,
    auth as getAuth,
    storage as getStorage
  };