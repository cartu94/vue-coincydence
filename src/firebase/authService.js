import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./index.js";

const provider = new GoogleAuthProvider();

export const loginWithGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error during Google sign-in redirect", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return auth.currentUser;
  } catch (error) {
    console.error("Error logging out", error);
    throw error;
  }
};

export const onAuthChange = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
