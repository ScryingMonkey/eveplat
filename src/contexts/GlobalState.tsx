import React, { useReducer } from "react";
import {
  AppContext,
  globalReducer,
  Action,
  ActionType,
  CbRoute,
  Payload
} from "./_index";
import initialState from "./AppContext/InitialState";

const GlobalState = props => {
  // const [state, setState] = useState(initialState);

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const f = {
    addRoute: (route: CbRoute) => {
      sendDispatch(ActionType.ADD_ROUTE, { route: route });
    },
    deleteRoute: (route: CbRoute) => {
      sendDispatch(ActionType.DELETE_ROUTE, { route: route });
    }
  };
  const sendDispatch = (type: ActionType, payload: Payload) => {
    let action: Action = { type: type, payload: payload };
    dispatch(action);
  };

  return (
    <AppContext.Provider
      value={{
        state: state,
        f: f
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default GlobalState;
