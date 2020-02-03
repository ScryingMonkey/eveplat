import React, { useEffect, useContext } from "react";
import "./assets/App.css";
import "./assets/w3.css";
import { GlobalState, AppContext } from "./contexts/_index";
import { Layout } from "./components/_index";

const App: React.FC<{}> = () => {
  const { version } = useContext(AppContext).state;

  useEffect(() => {
    console.log(`eveplat dashboard ${version}...`);
  }, [version]);

  return (
    <GlobalState>
      <div className="App">
        <Layout />
      </div>
    </GlobalState>
  );
};

export default App;
