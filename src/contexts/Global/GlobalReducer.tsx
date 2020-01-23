import { Action, ActionType} from "../_index";
// const getEventsFromFirebase =()=> {
//   let events = [];
//   this.getEventsRef()
//     .get()
//     .then(res => {
//       let events = res.docs.map(doc => {
//         let te = new TicketEvent();
//         te.setConfig(doc.data());
//         return te;
//       });
//       // console.log(`events:${events}`);
//       // console.log(events);
//     });
//   return events;
// }
// const getVenuesFromFirebase =()=> {
//   let venues = [];
//   this.getVenuesRef()
//     .get()
//     .then(res => {
//       let events = res.docs.map(doc => {
//         let v = doc.data;
//         return v;
//       });
//       // console.log(`venues:${venues}`);
//       // console.log(venues);
//     });
//   return venues;
// }

export const globalReducer = (state, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ROUTE:
      return { ...state, routes: [...state.routes, action.payload.route] };
    case ActionType.ADD_EVENT:
      let event = action.payload.event;
      // TODO: Update firebase with new event

      return {...state, event:{...state.event, events: [...state, event]}};
    case ActionType.DELETE_EVENT:
      let newEvents = state.event.events.filter(e => e.id !== action.payload.id);
      // TODO: Delete event from fb.
      return { ...state, event:{...state.event, events: newEvents }};
    case ActionType.UPDATE_EVENT:
      // TODO: Update event in fb.
      return { ...state, event:{...state.event, events: [...state.events, action.payload.event] }};
    case ActionType.SET_EVENTS:
      return { ...state, event:{...state.event, events: [...action.payload.events] }};
    case ActionType.UPDATE_NEW_TE:
      return {...state, event:{...state.event, newTe:{...state.newTe, te: action.payload.event}}}
    default:
      return state;
  }
};
export default globalReducer;
