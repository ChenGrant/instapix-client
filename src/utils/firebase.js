import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAQvIBZpUoRncsXZgACC3xGJ13jASj9Fvk",
  authDomain: "instapix-c6006.firebaseapp.com",
  projectId: "instapix-c6006",
  storageBucket: "instapix-c6006.appspot.com",
  messagingSenderId: "443445380315",
  appId: "1:443445380315:web:9297cd1e884bdbdced38fe",
});

export const auth = getAuth(app);
