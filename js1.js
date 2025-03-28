// Import Firebase modules (For Firebase 9+)
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase configuration (Replace with your Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyDf-QQDqR49tObI5nLa0an4GdPvvOVSLlI",
    authDomain: "student-tracking-system-671bd.firebaseapp.com",
    projectId: "student-tracking-system-671bd",
    storageBucket: "student-tracking-system-671bd.firebasestorage.app",
    messagingSenderId: "745812278752",
    appId: "1:745812278752:web:440a28f2f4558811a6ff85",
    measurementId: "G-C9JYDXHN5D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
    } catch (error) {
        console.error("Signup Error:", error.message);
    }
};

// Login Function
const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.error("Login Error:", error.message);
    }
};

// Logout Function
const logout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Logout Error:", error.message);
    }
};

// Example usage
signUp("test@example.com", "password123"); // Call this when signing up
login("test@example.com", "password123");  // Call this when logging in
logout();  // Call this when logging out
