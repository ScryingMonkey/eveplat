import {InitialState} from './InitialState';
import Venue from "../../types/Venue";
import { TicketEvent } from "../../types/_index";
import { DataObject } from '../../components/CbList/_index';
import {CbRoute} from '../../types/_index';

export const globalReducer = (
    state:InitialState, 
    action: Action
  ):InitialState => {

  const nstate:InitialState = {...state};

  switch (action.type) {
    case ActionType.ADD_ROUTE:
      nstate.routes =  [...nstate.routes, action.payload.route];
      break;

    case ActionType.SET_ITEM:
      // nstate.event.events = [...nstate.event.events, action.payload.event];
      const io = action.payload.dataObject.getObject();
      action.payload.db.setDoc(action.payload.coll, io.id, io);
      // clear 
      
    case ActionType.SET_EVENT:
      // nstate.event.events = [...nstate.event.events, action.payload.event];
      const teo = action.payload.event.getObject();
      action.payload.db.setDoc("events", teo.id, teo);
      // clear newTe
      nstate.event.newTe = new TicketEvent();
      break;
    case ActionType.SET_EVENTS:
      nstate.event.events = [...action.payload.events];
      break;
    case ActionType.DELETE_EVENT: 
      action.payload.db.deleteDoc('events',action.payload.event);
      nstate.event.events = [...nstate.event.events
        .filter(e => e.id !== action.payload.id)
      ];
      break;
    case ActionType.SET_NEW_TE:
      nstate.event.newTe = action.payload.event;
      break;
    
    case ActionType.SET_VENUE:
      // nstate.venue.venues = [...nstate.venue.venues, action.payload.venue];
      const vo = action.payload.venue.getObject();
      action.payload.db.setDoc("venues", vo.id, vo)
      // clear newV
      nstate.venue.newV = new Venue();
      break;
    case ActionType.SET_VENUES:
      nstate.venue.venues = [...action.payload.venues];
      break;
    case ActionType.DELETE_VENUE:
      action.payload.db.deleteDoc('venues',action.payload.venue.id); 
      nstate.venue.venues = [...nstate.venue.venues
          .filter(v => v.id !== action.payload.venue.id)
        ];
      break;
    case ActionType.SET_NEW_V:
      nstate.venue.newV = action.payload.venue.clone();
      break;
    
    default:
      console.log(`...globalreducer(state, ${action}): reached default case.`);
  }
  
  // console.log('nstate from reducer.UPDATE_NEW_TE');
  // console.log(nstate);
  return nstate;
};
export default globalReducer;

export enum ActionType {  //move to global reducer?
  ADD_ROUTE = "ADD_ROUTE",

  SET_ITEM = "SET_ITEM",
  SET_ITEMS = "SET_ITEMS",
  DELETE_ITEM = "DELETE_ITEM",
  SET_NEW_ITEM = "SET_NEW_ITEM",

  SET_EVENT = "ADD_EVENT",
  SET_EVENTS = "ADD_EVENTS",
  DELETE_EVENT = "DELETE_EVENT",
  SET_NEW_TE = "UPDATE_NEW_TE",

  SET_VENUE = "SET_VENUE",
  SET_VENUES = "SET_VENUES",
  DELETE_VENUE = "DELETE_VENUE",
  SET_NEW_V = "SET_NEW_V",

}
export type Payload = {
  db?: any;
  coll?: 'events' | 'venues';
  id?: string;
  route?: CbRoute;
  label?: string;
  dataObject?: TicketEvent | Venue;
  dataObjects?: TicketEvent[] | Venue[];
  event?: TicketEvent;
  events?: TicketEvent[];
  venue?: Venue;
  venues?: Venue[];
};
export type Action = {
  type: string;
  payload?: Payload;
};