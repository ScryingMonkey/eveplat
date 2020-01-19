import React, { useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { ButtonIcon } from "../_index";
import { AppContext, FirebaseContext } from "../../contexts/_index";

const EventListItem: React.FunctionComponent<{
  te: TicketEvent;
  listkey: string;
}> = props => {
  const fb = useContext(FirebaseContext);
  const deleteHandler = (e: Event) => {
    fb.deleteDoc("events", props.te.id);
  };
  return (
    <div className="cb-list-item w3-card-2" key={props.listkey}>
      <header>
        <span className="cb-badge">{props.listkey}</span>{" "}
        <h1>{props.te.name}</h1>
        <ButtonIcon icon="" label="D" round={true} onClick={deleteHandler} />
      </header>
      <div>Ticket Cost: ${props.te.ticketCost.toString()}</div>
      <div>Event begins: {props.te.startDate.toDateString()}</div>
      <div>Event Ends: {props.te.endDate.toDateString()}</div>
    </div>
  );
};
export default EventListItem;
