import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const login = async () =>
    await signInWithPopup(auth, new GoogleAuthProvider());

  return <button onClick={login}>Login</button>;
};

export default Login;
