import React, { useReducer, useEffect } from "react";
import {
  AppContext,
  globalReducer,
  Action,
  ActionType,
  CbRoute,
  Payload,
  Firebase,
  fb
} from "../_index";
import initialState from "./InitialState";
import {TicketEvent} from '../../types/TicketEvent';

interface ClassThing {
  id: string,
  setConfig: (Object) => void,
  getObject: () => Object
}
// const setThingInFirestore = (ref:any,thing:ClassThing) => {
//   ref.doc(thing.id).set(thing.getObject())
//     // .then(res => this.getEventsFromFirebase());
// }

const GlobalState = props => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  
  const sendDispatch = (type: ActionType, payload: Payload) => {
    let action: Action = { type: type, payload: payload };
    dispatch(action);
  };

  const setEvent = (te:TicketEvent) => {
    // sendDispatch(ActionType.UPDATE_EVENT,{event:event});
    console.log(`updateEvent(${te})`);
    const teo = te.getObject();
    console.log(teo);
    console.log(`...callling fb.addDoc('events',${teo.id},${teo})`);
    fb.setDoc("events", teo.id, teo)
  }
  const setEvents = (te:TicketEvent[]) => {
    sendDispatch(ActionType.SET_EVENTS,{events:te});
  }
  const deleteEvent = (te:TicketEvent) => {
    // sendDispatch(ActionType.DELETE_EVENT,{event:event});
    fb.deleteDoc('events',te.id);
  }
  const updateNewTe = (te:TicketEvent) => {
    sendDispatch(ActionType.UPDATE_NEW_TE, {event:te});
    console.log('GlobalState.updateNewTe: updated newTe.');
    console.log(state.newTe);
  }

  const f = {
    dispatch: dispatch,
    sendDispatch: sendDispatch,
    addEvent: setEvent,
    setEvent: setEvent,
    setEvents: setEvents,
    deleteEvent: deleteEvent,
    updateNewTe: updateNewTe,
  };

  const setUpFirebase =(fb:Firebase):void => {
    fb.subscribeToCollectionFromFirestore(fb,'events',TicketEvent,f.setEvents);
    //TODO: set up venue subscription
  }

  // const subscribeToCollectionFromFirestore =(fb:Firebase,key:string,thing:any,updateFunc:any)=> {
  //   fb.colls[key].ref.onSnapshot(res => {
  //     let arr = res.docs.map(doc => {
  //       let t = new thing;
  //       t.setConfig(doc.data());
  //       return t;
  //     });
  //     updateFunc(arr);
  //     console.log(`Update coll [${key}]`);
  //     console.log(arr);
  //   });
  // }

  useEffect(()=> {
    console.log("GlobalState mounted.  Setting up Firebase.");
    setUpFirebase(fb);
  },[]);

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
