import React, { useReducer, useEffect } from "react";
import {
  AppContext,
  globalReducer,
  Action,
  ActionType,
  CbRoute,
  Payload,
  Firebase
} from "./_index";
import initialState from "./AppContext/InitialState";
import {firestore} from 'firebase';
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
  // const [state, setState] = useState(initialState);

  const [state, dispatch] = useReducer(globalReducer, initialState);
  const sendDispatch = (type: ActionType, payload: Payload) => {
    let action: Action = { type: type, payload: payload };
    dispatch(action);
  };
  const f = {
    addRoute: (route: CbRoute) => {
      sendDispatch(ActionType.ADD_ROUTE, { route: route });
    },    
    addEvent: (event:TicketEvent) => {
      sendDispatch(ActionType.ADD_EVENT,{event:event});
    },
    deleteEvent: (event:TicketEvent) => {
      sendDispatch(ActionType.DELETE_EVENT,{event:event});
    },
    updateEvent: (event:TicketEvent) => {
      sendDispatch(ActionType.UPDATE_EVENT,{event:event});
    },
    setEvents: (events:TicketEvent[]) => {
      sendDispatch(ActionType.SET_EVENTS,{events:events});
    }
  };

  const setUpFirebase =()=> {
    const fb = new Firebase();
    subscribeToCollectionFromFirestore(fb,'events',TicketEvent,f.setEvents);
    //TODO: set up venue subscription
  }
  const subscribeToCollectionFromFirestore =(fb:Firebase,key:string,thing:any,updateFunc:any)=> {
    // firestore().collection('events').
    fb.colls[key].ref.onSnapshot(res => {
      let arr = res.docs.map(doc => {
        let t = new thing;
        t.setConfig(doc.data());
        return t;
      });
      updateFunc(arr);
      console.log(`Update coll [${key}]`);
      console.log(arr);
    });
  }

  useEffect(()=> {
    console.log("GlobalState did mount.");
    setUpFirebase();
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
