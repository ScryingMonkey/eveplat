import React from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { EventListItem } from "./_index";

const EventList: React.FunctionComponent<{
  events: TicketEvent[];
  className: string;
}> = props => {
  return (
    <div className={"cb-list" + props.className}>
      {props.events.map((te: TicketEvent, i: number) => {
        return <EventListItem te={te} key={i} listkey={i.toString()} />;
      })}
    </div>
  );
};
export default EventList;
