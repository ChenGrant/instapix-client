import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserProvider } from "../context/UserContext";

const FirebaseUserListener = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [initializedUser, setInitializedUser] = useState(false);
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitializedUser(true);
    });
    return unsubscribeAuth;
  });
  if (!initializedUser) return;
  return <UserProvider value={user}>{children}</UserProvider>;
};

export default FirebaseUserListener;
