import uuid from "uuid";
import {Field} from '../components/CbList/_index';

type EventFields = {
  name:Field;
  id:Field;
  status:Field;
  creatorId:Field;
  startDate:Field;
  endDate:Field;
  ticketCost:Field;
  ticketsAvailable:Field;
  ticketsSold:Field;     
  eventCost:Field;     
  venueId:Field;     
  buyerDescription:Field;     
  managerDescription:Field;     
  }

export default class TicketEvent {
  name: string;
  id: string;
  venueId: string;
  status: string;
  creatorId: string;
  startDate: Date;
  endDate: Date;
  ticketsAvailable: Number;
  ticketsSold: Number;
  ticketCost: Number;
  buyerDescription: string;
  managerDescription: string;

  static eventFields:EventFields = {
    name:{ valueKey: "name", label: "Name", type: "text" },
    id:{ valueKey: "id", label: "ID", type: "text" },
    status:{ valueKey: "status", label: "Status", type: "text" },
    creatorId:{ valueKey: "creatorId", label: "Creator ID", type: "text" },
    startDate:{ valueKey: "startDate", label: "Start Date", type: "date" },
    endDate:{ valueKey: "endDate", label: "End Date", type: "date" },
    ticketCost:{ valueKey: "ticketCost", label: "Ticket Cost", type: "number", min: "0", step:"0.01"},
    ticketsAvailable:{ valueKey: "ticketsAvailable", label: "Tickets Available", type: "number", min:"0" },
    ticketsSold:{ valueKey: "ticketsSold", label: "Tickets Sold", type: "number", min:"0" },
    eventCost:{ valueKey: "eventCost", label: "Event Production Cost", type: "number", min: "0", step:"0.01" },
    venueId:{ valueKey: "venueId", label: "Venue", type: "text" },
    buyerDescription:{ valueKey: "buyerDescription", label: "Buyer's Description", type: "longtext" },
    managerDescription:{ valueKey: "managerDescription", label: "Manager's Description", type: "longtext" }
  }

  constructor() {
    this.name = "";
    this.id = uuid.v4();
    this.venueId = "";
    this.status = "Inactive";
    this.creatorId = "";
    this.startDate = new Date();
    this.endDate = new Date();
    this.ticketsAvailable = 0;
    this.ticketsSold = 0;
    this.ticketCost = 0;
    this.buyerDescription = "";
    this.managerDescription = "";
  }
  clone():TicketEvent {
    const nte = new TicketEvent();
    Object.keys(this).forEach(k => nte[k] = this[k]);
    return nte;
  }
  clear(){
    const nte = new TicketEvent();
    Object.keys(nte).forEach(k => this[k] = nte[k]);
  }
  setConfig(o: { [key: string]: any }):void {
    Object.keys(o).forEach(k => {
      switch(k){
        case 'endDate':
        case 'startDate':
          // console.log(`updating startdate: <${typeof o[k]}> ${o[k]}`)
          this[k] = (typeof o[k] == 'string')? o[k] : (o[k].toDate());
          break;
        case 'ticketsAvailable':
        case 'ticketSold':
        case 'ticketCost':
          this[k] = parseInt(o[k]);
          break;
        default:
          this[k] = o[k]
      }
    });
    // console.log(this);
  }
  getObject() {
    let o: { [key: string]: any } = {};
    Object.keys(this).forEach(k => o[k] = this[k]);
    return o;
  }
}
