import React from "react";
import { Action, ActionType } from "./_index";

export const globalReducer = (state, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload.route] };
    case ActionType.DELETE_ROUTE:
      return;
    default:
      return state;
  }
};
export default globalReducer;
