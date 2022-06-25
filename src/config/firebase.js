import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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

// Database fucntions
const createRoom = async (name) => {
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      name,
    });
  } catch (err) {
    console.error(err);
  }
};

export { createRoom };
