import logo from "../../assets/logo.svg";
import { TicketEvent } from "../../types/TicketEvent";
import initialStyles, { InitialStyles } from "./InitialStyles";
import appFuncs, { AppFuncs } from "./GlobalFuncs";
import { CbRoute } from "../_index";
import {Section,DataItem} from "../../components/CbList/_index";

type Field = {
  valueKey:string;
  label:string;
  type:string;
  min?:string;
  step?:string;
}
const eventFields:{[P: string]:Field} = {
  name:{ valueKey: "name", label: "Name", type: "text" },
  startDate:{ valueKey: "startDate", label: "Start Date", type: "date" },
  endDate:{ valueKey: "endDate", label: "End Date", type: "date" },
  ticketCost:{ valueKey: "ticketCost", label: "Ticket Cost", type: "number", min: "0", step:"0.01"},
  ticketsAvailable:{ valueKey: "ticketsAvailable", label: "Tickets Available", type: "number", min:"0" },
  ticketsSold:{ valueKey: "ticketsSold", label: "Tickets Sold", type: "number", min:"0" },
  eventCost:{ valueKey: "eventCost", label: "Event Production Cost", type: "number", min: "0", step:"0.01" },
  venueId:{ valueKey: "venueId", label: "Venue", type: "text" },
  buyerDescrition:{ valueKey: "buyerDescrition", label: "Buyer's Description", type: "longtext" },
  managerDescription:{ valueKey: "managerDescription", label: "Manager's Description", type: "longtext" }
}
type EventFields = typeof eventFields;
const venueFields:{[P:string]:Field} = {
  name:{ valueKey: "name", label: "Name", type: "text" },
}
type VenueFields = typeof venueFields;

export type InitialState = {
  title: string;
  logo: string;
  event: {
    newTe: {
      te:TicketEvent;
      addEventLayout:Section[]
    }
    eventItemLayout:Section[];
    events: TicketEvent[];
  },
  venue: {
    newVenue: {
      venue: null;
      addVenueLayout: Section[],
    },
    venueItemLayout:Section[];
    venues: []; 
  };
  routes: CbRoute[];
  styles: InitialStyles;
  funcs: AppFuncs;
};
const initialState: InitialState = {
  title: "Event Platform",
  logo: logo,
  event: {
    newTe: {
      te: new TicketEvent(),
      addEventLayout: [
        {
          'title': 'Name',
          'numColls':1,
          'colls':[
            [ eventFields.name ],
          ],
        },{
          'title': 'Numbers',
          'numColls':2,
          'colls':[
            [ eventFields.ticketsAvailable ],
            [ eventFields.ticketCost, eventFields.eventCost ],
          ], 
        },{
          'title': 'Dates',
          'numColls':2,
          'colls':[
            [ eventFields.startDate ],
            [ eventFields.endDate ]
          ], 
        },{
          'title': 'Venue',
          'numColls':1,
          'colls':[
            [ eventFields.venueId ]
          ], 
        },{
          'title': 'Descriptions',
          'numColls':1,
          'colls':[
            [ eventFields.buyerDescrition, eventFields.managerDescription ]
          ], 
        }
      ]
    },
    eventItemLayout: [
      {
        'title': 'Event Summary',
        'numColls':2,
        'colls':[
          [ eventFields.venueId ]
        ],
      },{
        'title' : 'Event Statistics',
        'numColls':2,
        'colls':[
          [ eventFields.ticketCost, eventFields.eventCost ],
          [ eventFields.ticketsAvailable, eventFields.ticketsSold ]
        ],
      },{
        'title':'Descriptions',
        'numColls':1,
        'colls':[
          [ eventFields.managerDescription, eventFields.buyerDescrition ]
        ],
      },
    ],
    events: [],
  },
  venue: {
    newVenue: {
      venue: null,
      addVenueLayout: [],
    },
    venueItemLayout: [],
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
