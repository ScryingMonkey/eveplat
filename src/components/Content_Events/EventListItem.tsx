import React, { useState, useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { LayoutPresenter, Section } from "../CbList/_index";
import { AppContext } from "../../contexts/_index";
import { tsPropertySignature } from "@babel/types";
import { cpus } from "os";

const EventListItem: React.FunctionComponent<{
  te: TicketEvent;
  listkey: string;
}> = ({listkey,te}) => {
  const {state} = useContext(AppContext);
  const [collapsed, setCollapsed] = useState(true);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className="cb-list-item w3-card-2" >
      <EventListItemHeader 
        listkey={listkey} 
        te={te} 
        collapsed={collapsed}
        collapseHandler={collapseHandler}  />

      { (collapsed) ? 
      null : (
        <EventListItemExpanded layout={state.event.eventItemLayout} te={te} />
      )}
      
    </div>
  );
};
export default EventListItem;

const EventListItemHeader:React.FC<{
  te: TicketEvent;
  listkey: string;
  collapsed: boolean;
  collapseHandler: () => void;
}> = ({listkey,te,collapsed,collapseHandler}) => {
  const {f} = useContext(AppContext);
  return (
    <div className='cb-list-item-header' >
      <span className="cb-badge">{listkey}</span>
      <h1>{te.name}</h1>
      <span>{te.status}</span>
      <button onClick={() => alert('Implement edit button')}>Edit</button>      
      <button onClick={() => f.deleteEvent(te)}>Delete</button>
      <button onClick={() => collapseHandler()}>Collapse</button>
    </div>
  );
}

const EventListItemExpanded:React.FC<{
  te: TicketEvent;
  layout: Section[];
}> = ({te, layout}) => {
  return (
      <LayoutPresenter layout={layout} dataObject={te} isInput={false} />
  );
}


