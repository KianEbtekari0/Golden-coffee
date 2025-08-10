// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRsJiXP-XCC8YMbOgff9CpMnq7v8OXBrA",
  authDomain: "gold-coffee-d2f13.firebaseapp.com",
  databaseURL: "https://gold-coffee-d2f13-default-rtdb.firebaseio.com",
  projectId: "gold-coffee-d2f13",
  storageBucket: "gold-coffee-d2f13.firebasestorage.app",
  messagingSenderId: "1051365954304",
  appId: "1:1051365954304:web:a0d3e9f8e81b05f0ba19e5",
  measurementId: "G-K3RXD1TP56"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
