import { Action, ActionType} from "./_index";
import {TicketEvent} from '../types/TicketEvent';





const getEventsFromFirebase =()=> {
  let events = [];
  this.getEventsRef()
    .get()
    .then(res => {
      let events = res.docs.map(doc => {
        let te = new TicketEvent();
        te.setConfig(doc.data());
        return te;
      });
      // console.log(`events:${events}`);
      // console.log(events);
    });
  return events;
}
const getVenuesFromFirebase =()=> {
  let venues = [];
  this.getVenuesRef()
    .get()
    .then(res => {
      let events = res.docs.map(doc => {
        let v = doc.data;
        return v;
      });
      // console.log(`venues:${venues}`);
      // console.log(venues);
    });
  return venues;
}

export const globalReducer = (state, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload.route] };
    case ActionType.ADD_EVENT:
      let event = action.payload.event;
      // TODO: Update firebase with new event

      return {...state, events: [...state, event]};
    case ActionType.DELETE_EVENT:
      let newEvents = state.events.filter(e => e.id != action.payload.id);
      // TODO: Delete event from fb.
      return { ...state, events: newEvents };
    case ActionType.UPDATE_EVENT:
      // TODO: Update event in fb.
      return { ...state, events: [...state.events, action.payload.event] };
    case ActionType.SET_EVENTS:
      return { ...state, events: [...action.payload.events] };
    default:
      return state;
  }
};
export default globalReducer;
