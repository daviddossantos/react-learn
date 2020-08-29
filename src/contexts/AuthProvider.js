import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  function signIn() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("@react-learn:user", JSON.stringify(user));
      }
    });
  }
  function signOut() {
    localStorage.setItem("@react-learn:user", null);
    setCurrentUser(null);
  }

  useEffect(() => {
    async function loadingStorageData() {
      const storageUser = localStorage.getItem("@react-learn:user");
      if (storageUser) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setCurrentUser(JSON.parse(storageUser));
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    loadingStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signIn, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
