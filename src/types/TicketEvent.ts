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
  setConfig(o: object) {
    for (let k in o) {
      this[k] = o[k];
    }
    return this;
  }
  getObject() {
    let o: { [key: string]: any } = {};
    for (let k in this) {
      o[k] = this[k];
    }
    return o;
  }
}
