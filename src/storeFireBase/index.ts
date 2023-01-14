import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCw8Xjdt-VHght_AnWTQBBe5TbIlpVejUA",
  authDomain: "apfco-storage.firebaseapp.com",
  projectId: "apfco-storage",
  storageBucket: "apfco-storage.appspot.com",
  messagingSenderId: "771918136402",
  appId: "1:771918136402:web:9066fd72ad51a993e54b8b",
  measurementId: "G-7QJGBN21RE",
});

// used for the databas refs
const db = getDatabase(firebaseApp);

// here we can export reusable database references
export const todosRef = ref(db, "todos");
