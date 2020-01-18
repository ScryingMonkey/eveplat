import React, { useState, useContext } from "react";
import { TicketEvent } from "../../types/TicketEvent";
import { InputField } from "../_index";

const AddTicketEvent = () => {
  const [te, setTe] = useState(new TicketEvent());
  // const [events, setEvents] = useContext(AppContext);
  const inputs = [
    { name: "name", label: "Name", type: "type" },
    { name: "venueId", label: "Venue", type: "type" },
    { name: "status", label: "Status", type: "type" },
    { name: "startDate", label: "Start Date", type: "type" },
    { name: "endDate", label: "End Date", type: "type" },
    { name: "ticketsAvailable", label: "Tickets Available", type: "type" },
    { name: "ticketsSold", label: "Tickets Sold", type: "type" },
    { name: "ticketCost", label: "Ticket Cost", type: "type" },
    { name: "buyerDescrition", label: "Buyer's Description", type: "type" },
    { name: "managerDescription", label: "Manager's Description", type: "type" }
  ];

  const addTicketEvent = e => {
    e.preventDefault();
    // setEvents(prevEvents => [...prevEvents, te]);
    console.log(te);
  };

  const updateTe = (key: string, val: string) => {
    let nte = te.setConfig({ [key]: val });
    setTe(nte);
  };

  return (
    <div className="">
      <form onSubmit={addTicketEvent} className="">
        {inputs.map((inp, i) => (
          <InputField
            key={i}
            type={inp.type}
            label={inp.label}
            name={inp.name}
            changeHandler={updateTe}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTicketEvent;
