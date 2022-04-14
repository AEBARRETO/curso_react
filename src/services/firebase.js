import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhTsUM4TI_TvjaHsfTUU__g8n6GdhcXFk",
  authDomain: "barretoangelch.firebaseapp.com",
  projectId: "barretoangelch",
  storageBucket: "barretoangelch.appspot.com",
  messagingSenderId: "999722631584",
  appId: "1:999722631584:web:21a99c9db0cec2ea7b24c5"
};

const app = initializeApp(firebaseConfig);
const fireStoreDB = getFirestore(app);

export default fireStoreDB;

