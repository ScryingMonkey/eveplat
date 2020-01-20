import React, { useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { EventListItem } from "./_index";
import { AppContext } from "../../contexts/_index";

const EventList = props => {
  const {state} = useContext(AppContext);
  return (
    <div className={"cb-list" + props.className}>
      {state.events.map((te: TicketEvent, i: number) => {
        return <EventListItem te={te} key={i} listkey={i.toString()} />;
      })}
    </div>
  );
};
export default EventList;
