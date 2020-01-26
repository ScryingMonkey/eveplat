import uuid from "uuid";
import {Field} from './_index';

type DataObjectFields = {
    name:Field;
    id:Field;
    status:Field;
    creatorId:Field;
}

export default class DataObject {
    name: string = "";
    id: string = "";
    status: string = "Inactive";
    creatorId: string = "";

    static fields:DataObjectFields = {
        name:{ valueKey: "name", label: "Name", type: "text" },
        id:{ valueKey: "id", label: "Id", type: "text" },
        status:{ valueKey: "status", label: "Status", type: "text" },
        creatorId:{ valueKey: "creatorId", label: "Creator ID", type: "text" },
    }
     
    constructor() {
        this.id = uuid.v4();
    }
    clone():DataObject {
        const ndo = new DataObject();
        Object.keys(this).forEach(k => ndo[k] = this[k]);
        return ndo;
    }
    clear(){
        const ndo = new DataObject();
        Object.keys(ndo).forEach(k => this[k] = ndo[k]);
    }
    setConfig(o: object):void {
        console.log(`> DataObject.setconfig(o=${o})`);
    }
    getObject() {
        let o: { [key: string]: any } = {};
        Object.keys(this).forEach(k => o[k] = this[k]);
        return o;
    }

}