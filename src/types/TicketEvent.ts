import uuid from "uuid";

export class TicketEvent {
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
  setConfig(o: object):void {
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
