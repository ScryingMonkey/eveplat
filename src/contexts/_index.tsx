import context from "./App-state";
import funcs from "./App-funcs";
import style from "./App-style";
import Context, { ContextConsumer, ContextProvider } from "./App-context";
import Firebase, { FirebaseContext } from "./firebase-context/_index";

export {
  Firebase,
  FirebaseContext,
  Context,
  ContextConsumer,
  ContextProvider,
  context,
  funcs,
  style
};
export default Context;
