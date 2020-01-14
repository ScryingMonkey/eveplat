import React from "react";
import "./assets/App.css";
import { ContextProvider, defaultContext } from "./contexts/_index";
import { Layout } from "./components/_index";

function App() {
  const context = defaultContext;
  return (
    <ContextProvider value={context}>
      <Layout />
    </ContextProvider>
  );
}

export default App;
