import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import { setDoc, doc } from "firebase/firestore";

export const getStarted = async (Alert, form) => {
  const { name, email, password } = form;
  try {
    // Create user with email and password
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Add user details to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
    });
  } catch (error) {
    Alert.alert("Error User already exists");
  }
};

// Login function
export const login = async (Alert, form) => {
  const { email, password } = form;
  try {
    // Sign in user with email and password
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    Alert.alert("Invalid login credentials");
  }
};

// Logout function
export const logout = async (Alert) => {
  try {
    // Sign out user
    await signOut(auth);
    // Alert.alert("Success", "User logged out successfully");
  } catch (error) {
    Alert.alert("Error", error.message);
  }
};
