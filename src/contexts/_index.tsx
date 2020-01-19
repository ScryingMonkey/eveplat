import AppContext from "./AppContext/AppContext";
import Firebase, { FirebaseContext } from "./FirebaseContext/_index";
import globalReducer from "./GlobalReducer";
import GlobalState from "./GlobalState";
import { TicketEvent } from "../types/TicketEvent";

export type CbRoute = {
  label: string;
  route: string;
  exact?: boolean;
};
export enum ActionType {
  ADD_ROUTE = "ADD_ROUTE",
  DELETE_ROUTE = "DELETE_ROUTE"
}
export type Payload = {
  id?: string;
  route?: CbRoute;
  label?: string;
  te?: TicketEvent;
};
export type Action = {
  type: string;
  payload?: Payload;
};

export { Firebase, FirebaseContext, AppContext, GlobalState, globalReducer };
