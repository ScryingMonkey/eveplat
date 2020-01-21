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
  buyerDescriptions: string;
  managerDescriptions: string;

  constructor() {
    this.name = "";
    this.id = uuid.v4();
    this.venueId = "";
    this.status = "";
    this.creatorId = "";
    this.startDate = new Date();
    this.endDate = new Date();
    this.ticketsAvailable = NaN;
    this.ticketsSold = NaN;
    this.ticketCost = NaN;
    this.buyerDescriptions = "";
    this.managerDescriptions = "";
  }
  setConfig(o: object):void {
    Object.keys(o).forEach(k => {
      switch(k){
        case 'endDate':
        case 'startDate':
          this[k] = (o[k].toDate());
          console.log(`setconfig(): converted ts to date for ${k}: ${typeof o[k]} => ${typeof this[k]}`);
          console.log(`name: ${o['name']}`)
          console.log(o[k]);
          console.log(this[k]);
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
    console.log(this);
  }
  getObject() {
    let o: { [key: string]: any } = {};
    Object.keys(this).forEach(k => o[k] = this[k]);
    return o;
  }
}
