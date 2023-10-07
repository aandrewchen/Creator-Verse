import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6oWe4GrnhrKxNXofEraR9ICMbKjcdwec",
  authDomain: "creator-verse.firebaseapp.com",
  projectId: "creator-verse",
  storageBucket: "creator-verse.appspot.com",
  messagingSenderId: "933242877403",
  appId: "1:933242877403:web:ed1eb0214593bb7672e3fe",
  measurementId: "G-04WPT7HLLB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
