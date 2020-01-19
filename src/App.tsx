import React from "react";
import "./assets/App.css";
import "./assets/w3.css";
import { GlobalState } from "./contexts/_index";
import { Layout } from "./components/_index";

const App: React.FC<{}> = () => {
  return (
    <GlobalState>
      <div className="App">
        <Layout />
      </div>
    </GlobalState>
  );
};

export default App;
