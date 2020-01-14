import React from "react";
import { defaultContext } from "./_index";

const Context = React.createContext(defaultContext);

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
export default Context;
