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
        case ('startDate' || 'endDate'):
          this[k] = new Date((o[k].seconds) * 1000);
        case ('ticketsAvailable' || 'ticketSold' || 'ticketCost'):
          this[k] = parseInt(o[k]);
        default:
          this[k] = o[k]
      }
    });
  }
  getObject() {
    let o: { [key: string]: any } = {};
    Object.keys(this).forEach(k => o[k] = this[k]);
    return o;
  }

  // Date methods
  getUnixSecondsFromTimestampString(s:string):number{
    // let s = "Timestamp(seconds=1579574527, nanoseconds=985000000)";
    try{
      let oi = (s.indexOf("="))+1;
      let fi = (s.indexOf(","))-oi;
      return parseInt(s.substr(oi,fi));
    } catch(err) {
      throw err;
    }
  }
  convertToShortDate(ts:any){
    console.log(`...convertToShortDate(date)`);
    const date = new Date(ts.seconds * 1000);
    console.log(date);
    return `${date.getDate()}/${date.getMonth()}/${date.getDate()}`;
  }
  convertToLongDate(ts:any){
    console.log(`...convertToLongDate(date)`);
    const date = new Date(ts.seconds * 1000);
    console.log(date);
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

}
