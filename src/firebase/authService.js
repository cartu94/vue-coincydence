import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult
} from "firebase/auth";
import { auth } from "./index.js";

const provider = new GoogleAuthProvider();

export const loginWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};
export const handleRedirectResult = async () => {
  return await getRedirectResult(auth)
    .then((result) => {
      console.log("handleRedirectResult", result);
      return result;
    })
    .catch((error) => {
      console.error("Error logging in", error);
    });
};

export const logout = async () => {
  try {
    return auth.signOut().then(() => {
      return auth.currentUser;
    });
  } catch (error) {
    console.error("Error logging out", error);
  }
};

export const onAuthChange = (callback) => {
  onAuthStateChanged(auth, callback);
};
