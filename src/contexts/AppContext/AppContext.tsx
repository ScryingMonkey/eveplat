import React, { createContext } from "react";
import initialState, { InitialState } from "./InitialState";

type AppContext = {
  state: any;
  f: any;
};

const AppContext = createContext<Partial<AppContext>>({
  state: initialState,
  f: {}
});

export default AppContext;
