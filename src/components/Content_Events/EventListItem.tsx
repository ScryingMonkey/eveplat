import React from "react";
import { TicketEvent } from "../../types/TicketEvent";

const EventListItem: React.FunctionComponent<{
  te: TicketEvent;
  listkey: string;
}> = props => {
  return (
    <div className="eventlist-item" key={props.listkey}>
      <h1>
        [{props.listkey}] {props.te.name}
      </h1>
      <div>Ticket Cost: ${props.te.ticketCost.toString()}</div>
      <div>Event begins: {props.te.startDate.toDateString()}</div>
      <div>Event Ends: {props.te.endDate.toDateString()}</div>
    </div>
  );
};
export default EventListItem;
