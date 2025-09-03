import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE as string,
    authDomain: "petlog-f1a51.firebaseapp.com",
    projectId: "petlog-f1a51",
    storageBucket: "petlog-f1a51.firebasestorage.app",
    messagingSenderId: "914744481255",
    appId: "1:914744481255:web:63c2b62ead6d13707a5942"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };