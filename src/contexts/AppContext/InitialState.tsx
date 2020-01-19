import logo from "../../assets/logo.svg";
import { TicketEvent } from "../../types/TicketEvent";
import initialStyles, { InitialStyles } from "./InitialStyles";
import appFuncs, { AppFuncs } from "./AppFuncs";
import { CbRoute } from "../_index";

// export type InitialState = typeof initialState;
export type InitialState = {
  title: string;
  logo: string;
  events: TicketEvent[];
  venues: [];
  routes: CbRoute[];
  styles: InitialStyles;
  funcs: AppFuncs;
};

const initialState: InitialState = {
  title: "Event Platform",
  logo: logo,
  events: [],
  venues: [],
  routes: [
    { label: "Home", route: "/", exact: true },
    { label: "Events", route: "/events", exact: false },
    { label: "Venues", route: "/venues", exact: false },
    { label: "Reports", route: "/reports", exact: false },
    { label: "Settings", route: "/settings", exact: false }
  ],
  styles: initialStyles,
  funcs: appFuncs
};
export default initialState;
