import React from "react";
import Firebase from "./_index";

interface FirebaseContextInterface {
  fb: Firebase;
  funcs: {};
}

const FirebaseContext = React.createContext<Firebase | null>(null);

export default FirebaseContext;
