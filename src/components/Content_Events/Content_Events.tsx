import React, { useContext, useState, Suspense } from "react";
import { AppContext } from "../../contexts/_index";
import { TicketEvent } from "../../types/TicketEvent";
import { AddTicketEvent, CbListHeader, EventsList } from "../_index";

const ContentEvents:React.FC<
  { nameInput: string; events: TicketEvent[]; showAddEvents: Boolean }
> = props => {

  const [showAddEvent, setShowAddEvent] = useState(false);
  const {state,f} = useContext(AppContext);

  const toggleAddEvent = () => {
    setShowAddEvent(!showAddEvent);    
  };
 
  return (
    <div className="content">
      <CbListHeader
        title="Events"
      />
      <Suspense fallback={<div>"Loading..."</div>}>
          {(state.event.events.length === 0) ?
            (<div>Loading...</div>) : //TODO: Replace with Loading component
            (<EventsList events={state.event.events} className="" />)
          }
          
      </Suspense>
    </div>
  );
}

export default ContentEvents;
