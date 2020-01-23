import React, { useState } from "react";
import "../CbList.css";

const ButtonToggle: React.FunctionComponent<{
  toggleHandler: () => void;
  label: string;
  unlabel: string;
  styles: string;
}> = props => {
  let [toggled, setToggled] = useState(true);

  const toggle = () => {
    setToggled(toggled => !toggled);
    props.toggleHandler();
  };

  return (
    <button className={props.styles} onClick={() => toggle()}>
      {toggled ? props.label : props.unlabel}
    </button>
  );
};
export default ButtonToggle;
