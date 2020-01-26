import uuid from "uuid";
import {Field, DataObject} from '../components/CbList/_index';

type VenueFields = {
    name:Field;
    id:Field;
    status:Field;
    creatorId:Field;
    address:Field;        
}

export default class Venue {
    name: string = "";
    id: string = "";
    status: string = "Inactive";
    creatorId: string = "";
    address:string = "";

    static venueFields:VenueFields = {
        name:{ valueKey: "name", label: "Name", type: "text" },
        id:{ valueKey: "id", label: "Id", type: "text" },
        status:{ valueKey: "status", label: "Status", type: "text" },
        creatorId:{ valueKey: "creatorId", label: "Creator ID", type: "text" },
        address:{ valueKey: "address", label: "Address", type: "text" },
    }
     
    constructor() {
        this.id = uuid.v4();
    }
    clone():Venue {
        const nv = new Venue();
        Object.keys(this).forEach(k => nv[k] = this[k]);
        return nv;
    }
    clear(){
        const nte = new Venue();
        Object.keys(nte).forEach(k => this[k] = nte[k]);
    }
    setConfig(o: object):void {
        Object.keys(o).forEach(k => {
            switch(k){
            case 'endDate':
            case 'startDate':
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