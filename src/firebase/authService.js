import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import firebase from "./index.js";

const provider = new GoogleAuthProvider();
const auth = firebase.auth;

export const loginWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    return result.user;
  } catch (error) {
    console.error("Error handling redirect", error);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error logging out", error);
  }
};

export const observeAuthState = (userHandler) => {
  return onAuthStateChanged(auth, userHandler);
};