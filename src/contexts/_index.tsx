import AppContext from "./Global/AppContext";
import fb,{Firebase} from "./Firebase/_index";
import globalReducer from "./Global/GlobalReducer";
import GlobalState from "./Global/GlobalState";
import { TicketEvent } from "../types/TicketEvent";

export type CbRoute = {
  label: string;
  route: string;
  exact?: boolean;
};
export enum ActionType {
  ADD_ROUTE = "ADD_ROUTE",
  ADD_EVENT = "ADD_EVENT",
  DELETE_EVENT = "DELETE_EVENT",
  UPDATE_EVENT = "UPDATE_EVENT",
  SET_EVENTS = "FETCH_EVENTS",
}
export type Payload = {
  id?: string;
  route?: CbRoute;
  label?: string;
  event?: TicketEvent;
  events?: TicketEvent[];
};
export type Action = {
  type: string;
  payload?: Payload;
};

export { fb,Firebase, AppContext, GlobalState, globalReducer };
