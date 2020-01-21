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
} from "./_index";
import initialState from "./AppContext/InitialState";
import {TicketEvent} from '../types/TicketEvent';

interface ClassThing {
  id: string,
  setConfig: (Object) => void,
  getObject: () => Object
}
const setThingInFirestore = (ref:any,thing:ClassThing) => {
  ref.doc(thing.id).set(thing.getObject())
    // .then(res => this.getEventsFromFirebase());
}

const GlobalState = props => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const sendDispatch = (type: ActionType, payload: Payload) => {
    let action: Action = { type: type, payload: payload };
    dispatch(action);
  };
  const f =  {
      addRoute: (route: CbRoute) => {
        sendDispatch(ActionType.ADD_ROUTE, { route: route });
      },    
      addEvent: (eventId:string,te:any) => {  // TODO:Determine why TS is complaining that TicketEvent has no function getObject()
        // sendDispatch(ActionType.ADD_EVENT,{event:event});
        // const teo = te.getObject();
        console.log(`addEvent(${eventId},${te})`);
        console.log(`...callling fb.addDoc('events',${eventId},${te})`);
        fb.addDoc('events',eventId,te);
      },
      deleteEvent: (event:TicketEvent) => {
        // sendDispatch(ActionType.DELETE_EVENT,{event:event});
        fb.deleteDoc('events',event.id);
      },
      updateEvent: (event:TicketEvent) => {
        // sendDispatch(ActionType.UPDATE_EVENT,{event:event});
        fb.setDoc("events", event.id, event)
      },
      setEvents: (events:TicketEvent[]) => {
        sendDispatch(ActionType.SET_EVENTS,{events:events});
      }
    
  };

  const setUpFirebase =(fb:Firebase)=> {
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
    console.log("GlobalState did mount.");
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
