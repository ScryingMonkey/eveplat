import React, { useState, useContext } from "react";
import {AppContext} from '../../contexts/_index';
import { TicketEvent } from "../../types/TicketEvent";
import {LayoutPresenter, Section, InputField, FullWidthButton, HalfWidthButton, ButtonType} from '../CbList/_index';

const AddTicketEvent = () => {
  const [te, setTe] = useState(new TicketEvent());
  const [collapsed, setCollapsed] = useState(true);
  const {state, f} = useContext(AppContext);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  const addTicketEvent = () => {
    toggleCollapsed();
    // console.log("Adding te:TicketEvent...");
    // console.log(te);
    f.addEvent(te);
  };

  const updateTe = (key: string, val: string) => {
    te.setConfig({ [key]: val });
    setTe(te);
    f.updateNewTe(te);
  };

  return (
    <div>
      {(collapsed) ? 
      ( 
        <div>
          <AddEventButton label="Add an event (+)" toggle={toggleCollapsed} />
        </div> 
      ) : ( 
        <form>
          <SaveCancelButtonBar cancel={toggleCollapsed} save={addTicketEvent} />
          <div className="cb-list-item w3-card-2">
            <LayoutPresenter layout={state.event.newTe.addEventLayout} isInput={true} changeHandler={updateTe} />
          </div>
          <SaveCancelButtonBar cancel={toggleCollapsed} save={addTicketEvent} />
        </form>
      )}
    </div>
  );
};
export default AddTicketEvent;

const AddEventButton:React.FC<{
  toggle: () => void;
  label: string;
}> = ({label,toggle}) => {
  return (
    <FullWidthButton 
      label={label} 
      type={ButtonType.func} 
      clickHandler={toggle} 
      className="cb-list-item" />
  )
}
const SaveCancelButtonBar:React.FC<{
  cancel: () => void;
  save: () => void;
}> = ({cancel,save}) => {
  return (
    <div className="cb-list-item cb-list-button-bar-2">
      <HalfWidthButton label='Cancel' type={ButtonType.cancel} clickHandler={cancel} />
      <HalfWidthButton label='Save' type={ButtonType.save} clickHandler={save} />
    </div>
  );
}
const AddEventForm:React.FC<{
  layout: Section[];
  changeHandler: (key: string, val: any) => void;
}> = ({layout, changeHandler}) => {
  return (
    <div className="cb-list-item w3-card-2">
      <LayoutPresenter layout={layout} isInput={true} changeHandler={changeHandler} />
    </div>
  )
}