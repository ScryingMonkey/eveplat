import React, { useReducer, useEffect } from "react";
import {Action,ActionType,Payload} from './GlobalReducer';
import {
  AppContext,
  globalReducer,
  Firebase,
  fb
} from "../_index";
import initialState from "./InitialState";
import {TicketEvent, Venue} from '../../types/_index';

const GlobalState = props => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  
  const sendDispatch = (type: ActionType, payload: Payload) => {
    let action: Action = { type: type, payload:{...payload, db:fb} };
    dispatch(action);
  };
  const setEvents = (tes:TicketEvent[]) => {
    sendDispatch(ActionType.SET_EVENTS, {events:tes});
  }
  const setVenues = (vs:Venue[]) => {
    sendDispatch(ActionType.SET_VENUES, {venues:vs});
  }

  const setEvent = (te:TicketEvent) => {
    // console.log(`setEvent(${te})`);
    sendDispatch(ActionType.SET_EVENT, {event:te});
  }
  const deleteEvent = (te:TicketEvent) => {
    // console.log(`deleteEvent(${te})`);
    sendDispatch(ActionType.DELETE_EVENT, {event:te});
  }
  const updateNewTe = (te:TicketEvent) => {
    console.log('GlobalState.updateNewTe: updated newTe.');
    console.log(state.event.newTe);

    let action: Action = { 
      type: ActionType.SET_NEW_TE, 
      payload:{event:te} 
    };
    dispatch(action);
  }

  const setVenue = (v:Venue) => {
    // console.log(`> setVenue(${te})`);
    sendDispatch(ActionType.SET_VENUE, {venue:v});
  }
  const deleteVenue = (v:Venue) => {
    console.log(`> deleteVenue(${v})`);
    sendDispatch(ActionType.DELETE_VENUE, {venue:v});
  }
  const updateNewV = (v:Venue) => {
    console.log('> GlobalState.updateNewV: [state.venue.newV]');
    console.log(state.venue.newV);

    let action: Action = { 
      type: ActionType.SET_NEW_V, 
      payload:{venue:v} 
    };
    dispatch(action);
  }
  const f:{
    sendDispatch:(type: ActionType, payload: Payload)=>void;
    saveEventToDb:(te:TicketEvent)=>void;
    deleteEventFromDb:(te:TicketEvent)=>void;
    updateNewTe:(te:TicketEvent)=>void;
    saveVenueToDb:(v:Venue)=>void;
    deleteVenueFromDb:(v:Venue)=>void;
    updateNewV:(v:Venue)=>void;
  } = {
    sendDispatch: sendDispatch,
    saveEventToDb: setEvent,
    deleteEventFromDb: deleteEvent,
    updateNewTe: updateNewTe,
    saveVenueToDb: setVenue,
    deleteVenueFromDb: deleteVenue,
    updateNewV: updateNewV,
  };

  const setUpFirebase =(fb:Firebase):void => {
    fb.subscribeToCollectionFromFirestore(
      fb,
      'events',
      TicketEvent,
      setEvents
    );
    fb.subscribeToCollectionFromFirestore(
      fb,
      'venues',
      Venue,
      setVenues
    );
  }

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
