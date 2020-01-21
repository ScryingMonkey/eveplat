import React from "react";
import "./ButtonIcon.css";
import delete01 from "../../assets/icons/delete01.png";
import edit01 from "../../assets/icons/edit01.png";

const ButtonIcon: React.FC<{
  icon: string;
  label: string;
  round: boolean;
  onClick: (Event) => any;
}> = props => {
  const shape = props.round ? "round" : "square";

  const icons = {
    "": "",
    delete: delete01,
    edit: edit01
  };
  let icon = icons[props.icon];

  return (
    <span className={"button-icon" + shape} onClick={() => props.onClick}>
      <img src={icon} alt="icon" />
    </span>
  );
};
export default ButtonIcon;
