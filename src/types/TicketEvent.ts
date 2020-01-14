import uuid from "uuid";

export class TicketEvent {
  name: string;
  id: string;
  venueId: string;
  status: string;
  creatorId: string;
  availableDates: {
    start: Date;
    end: Date;
  };
  tickets: {
    available: Number;
    sold: Number;
    cost: Number;
  };
  descriptions: {
    buyer: string;
    manager: string;
  };

  constructor(name: string) {
    this.name = name;
    this.id = uuid.v4();
    this.venueId = "";
    this.status = "";
    this.creatorId = "";
    this.availableDates = { start: new Date(), end: new Date() };
    this.tickets = { available: NaN, sold: NaN, cost: NaN };
    this.descriptions = { buyer: "", manager: "" };
  }
  // updateConfig(pairs: Object) {
  //   Object.keys(pairs).forEach((p: string) => {
  //     if (p in this) {
  //       this[p] = pairs[p];
  //     }
  //   });
  // }
}
