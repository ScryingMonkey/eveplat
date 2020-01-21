import React, { useContext, useReducer } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { ButtonIcon } from "../_index";
import { AppContext } from "../../contexts/_index";

const EventListItem: React.FunctionComponent<{
  te: TicketEvent;
  listkey: string;
}> = ({listkey,te}) => {
  const {f} = useContext(AppContext);

  return (
    <div className="cb-list-item w3-card-2" >
      <header>
        <span className="cb-badge">{listkey}</span>{" "}
        <h1>{te.name}</h1>
        <button onClick={() => f.deleteEvent(te)}>Delete</button>
      </header>
      <div>Ticket Cost: ${`${te.ticketCost.toString()}`}</div>
      <div>Event begins: {`${te.convertToLongDate(te.startDate)}`}</div>
      <div>Event Ends: {`${te.convertToLongDate(te.endDate)}`}</div>
    </div>
  );
};
export default EventListItem;
