import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Logout = () => {
  return <button onClick={() => signOut(auth)}>Logout</button>;
};

export default Logout;
