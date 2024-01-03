import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvYFFkym7imV5meat3LS4HA1rrhxOm5y4",
  authDomain: "recipes-cook-830ea.firebaseapp.com",
  projectId: "recipes-cook-830ea",
  storageBucket: "recipes-cook-830ea.appspot.com",
  messagingSenderId: "1014085213265",
  appId: "1:1014085213265:web:147760579104f2ae11ec70"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const provider = new GoogleAuthProvider();