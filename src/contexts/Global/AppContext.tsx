import { createContext } from "react";
import initialState from "./InitialState";

type AppContextType = {
  state: typeof initialState;
  f: any;
};

export const AppContext = createContext<Partial<AppContextType>>({
  state: initialState,
  f: {}
});

export default AppContext;
