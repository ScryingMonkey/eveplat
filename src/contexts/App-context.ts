import React from "react";
import { context, funcs, style } from "./_index";
// import { TicketEvent } from "../types/TicketEvent";

const Context = React.createContext({ context, funcs, style });

export const ContextProvider = Context.Provider;

export const ContextConsumer = Context.Consumer;
export default Context;

// function CountProvider({children}) {
//   const [state, dispatch] = React.useReducer(countReducer, {count: 0})
//   return (
//     <CountStateContext.Provider value={state}>
//       <CountDispatchContext.Provider value={dispatch}>
//         {children}
//       </CountDispatchContext.Provider>
//     </CountStateContext.Provider>
//   )
// }
