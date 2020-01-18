import React from "react";
import "./assets/App.css";
import "./assets/w3.css";
import { ContextProvider, context, funcs, style } from "./contexts/_index";
import { Layout } from "./components/_index";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     context: context,
  //     style: style,
  //     funcs: funcs,
  //     stateFuncs: this.stateFuncs
  //   };
  // }
  // stateFuncs = {
  //   updateState: () => (key, val) => {
  //     this.setState({ key: val });
  //   }
  // };

  render() {
    return (
      <ContextProvider value={{ context, style, funcs }}>
        <div className="App">
          <Layout />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
