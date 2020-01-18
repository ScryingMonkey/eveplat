import React from "react";
import { ButtonToggle } from "../_index";

const CbListHeader: React.FunctionComponent<{
  toggleHandler: () => void;
  toggleLabel: string;
  untoggleLabel: string;
}> = props => {
  return (
    <div className="cb-list-header">
      <h1>Events</h1>
      <ButtonToggle
        toggleHandler={props.toggleHandler}
        label={props.toggleLabel}
        unlabel={props.untoggleLabel}
        styles="w3-button w3-medium w3-round-large w3-yellow button-toggle"
      />
    </div>
  );
};
export default CbListHeader;
