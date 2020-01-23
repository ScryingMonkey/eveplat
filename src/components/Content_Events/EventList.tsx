import React, { useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { EventListItem, AddTicketEvent } from "./_index";
import { AppContext } from "../../contexts/_index";

const EventList:React.FC<{
  events:TicketEvent[];
  className:string
}> = ({events,className}) => {
  const {state} = useContext(AppContext);
  return (
    <div className={"cb-list " + className}>
      <AddTicketEvent />
      {events.map((te: TicketEvent, i: number) => {
        return <EventListItem te={te} key={i} listkey={`${i}`} />;
      })}
      <AddTicketEvent />
    </div>
  );
};
export default EventList;
