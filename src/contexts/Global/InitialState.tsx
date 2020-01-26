import logo from "../../assets/logo.svg";
import { TicketEvent, Venue } from "../../types/_index";
import initialStyles, { InitialStyles } from "./InitialStyles";
import appFuncs, { AppFuncs } from "./GlobalFuncs";
import {Section,} from "../../components/CbList/_index";
import {CbRoute} from '../../types/_index';

export type InitialState = {
  title: string;
  logo: string;
  event: {
    newTe:TicketEvent;
    addEventLayout:Section[];
    eventItemLayout:Section[];
    events: TicketEvent[];
  },
  venue: {
    newV:Venue;
    addVenueLayout: Section[];
    venueItemLayout:Section[];
    venues: Venue[]; 
  };
  routes: CbRoute[];
  styles: InitialStyles;
  funcs: AppFuncs;
};

const initialState: InitialState = {
  title: "Event Platform",
  logo: logo,
  event: {
    newTe:new TicketEvent(),
    addEventLayout: [
        {
          'title': 'Name',
          'numColls':1,
          'colls':[
            [ TicketEvent.eventFields.name ],
          ],
        },{
          'title': 'Numbers',
          'numColls':2,
          'colls':[
            [ TicketEvent.eventFields.ticketsAvailable ],
            [ TicketEvent.eventFields.ticketCost, TicketEvent.eventFields.eventCost ],
          ], 
        },{
          'title': 'Dates',
          'numColls':2,
          'colls':[
            [ TicketEvent.eventFields.startDate ],
            [ TicketEvent.eventFields.endDate ]
          ], 
        },{
          'title': 'Venue',
          'numColls':1,
          'colls':[
            [ TicketEvent.eventFields.venueId ]
          ], 
        },{
          'title': 'Descriptions',
          'numColls':1,
          'colls':[
            [ TicketEvent.eventFields.buyerDescription, TicketEvent.eventFields.managerDescription ]
          ], 
        }
      ],
    eventItemLayout: [
      {
        'title': 'Event Summary',
        'numColls':2,
        'colls':[
          [ TicketEvent.eventFields.venueId ]
        ],
      },{
        'title' : 'Event Statistics',
        'numColls':2,
        'colls':[
          [ TicketEvent.eventFields.ticketCost, TicketEvent.eventFields.eventCost ],
          [ TicketEvent.eventFields.ticketsAvailable, TicketEvent.eventFields.ticketsSold ]
        ],
      },{
        'title':'Descriptions',
        'numColls':1,
        'colls':[
          [ TicketEvent.eventFields.managerDescription, TicketEvent.eventFields.buyerDescription ]
        ],
      },
    ],
    events: [],
  },
  venue: {
    newV:new Venue(),
    addVenueLayout: [
      {
        'title': 'Summary',
        'numColls':1,
        'colls':[
          [ Venue.venueFields.name ],
        ],
      },{
        'title': 'Address',
        'numColls':1,
        'colls':[
          [ Venue.venueFields.address ],
        ],
      }
    ],
    venueItemLayout: [
      {
        'title': 'Summary',
        'numColls':1,
        'colls':[
          [ Venue.venueFields.name, Venue.venueFields.creatorId ],
          [ Venue.venueFields.id ]
        ],
      },{
        'title': 'Address',
        'numColls':1,
        'colls':[
          [ Venue.venueFields.address ],
        ],
      }
    ],
    venues: [],
  },
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
