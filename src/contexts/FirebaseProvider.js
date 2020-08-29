import React, { createContext, useContext } from "react";
import * as firebase from "firebase";

export function useFirebase() {
  return useContext(FirebaseContext);
}

const FirebaseContext = createContext(null);
export default function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebase: new firebase() }}>
      {children}
    </FirebaseContext.Provider>
  );
}
