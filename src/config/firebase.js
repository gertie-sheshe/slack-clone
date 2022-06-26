import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import Image from "../assets/Gertrude.png";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "slack-clone-7075b.firebaseapp.com",
  projectId: "slack-clone-7075b",
  storageBucket: "slack-clone-7075b.appspot.com",
  messagingSenderId: "53472980581",
  appId: "1:53472980581:web:b08f316e7fe9f9bee0608c",
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const auth = firebase.default.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// Database functions
const createRoom = async (name) => {
  try {
    await addDoc(collection(db, "rooms"), {
      name,
    });
  } catch (err) {
    console.error(err);
  }
};

const addMessage = async (roomId, message) => {
  try {
    await addDoc(collection(db, "rooms", roomId, "messages"), {
      message,
      timestamp: serverTimestamp(),
      user: "Gertrude Nyenyeshi",
      userImage: Image,
    });
  } catch (err) {
    console.error(err);
  }
};

export { createRoom, addMessage };
