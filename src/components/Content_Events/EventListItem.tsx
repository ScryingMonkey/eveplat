import React, { useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
// import { ButtonIcon } from "../_index";
import { AppContext } from "../../contexts/_index";

const EventListItem: React.FunctionComponent<{
  te: TicketEvent;
  listkey: string;
}> = ({listkey,te}) => {
  const {funcs} = useContext(AppContext).state;
  const {deleteEvent} = useContext(AppContext).f;

  return (
    <div className="cb-list-item w3-card-2" >
      <header>
        <span className="cb-badge">{listkey}</span>{" "}
        <h1>{te.name}</h1>
        <button onClick={() => deleteEvent(te)}>Delete</button>
      </header>
      <div>Ticket Cost:   ${`${te.ticketCost.toString()}`}</div>
      <div>Event begins:   {`${funcs.convertToLongDate(te.startDate)}`}</div>
      <div>Event Ends:   {`${funcs.convertToLongDate(te.endDate)}`}</div>
    </div>
  );
};
export default EventListItem;
