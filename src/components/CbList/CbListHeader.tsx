import React from "react";
import { ButtonToggle } from "../_index";

const CbListHeader: React.FunctionComponent<{
  title: string;
  toggleHandler?: () => void;
  toggleLabel?: string;
  untoggleLabel?: string;
}> = props => {
  return (
    <div className="cb-list-header">
      <h1>{props.title}</h1>
      {(props.toggleHandler) ? (
        <ButtonToggle
        toggleHandler={props.toggleHandler}
        label={props.toggleLabel}
        unlabel={props.untoggleLabel}
        styles="w3-button w3-medium w3-round-large w3-yellow button-toggle"  />
        ) : null
      }
    </div>
  );
};
export default CbListHeader;
