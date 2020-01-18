import React, { useState } from "react";
import "./InputField.css";

/*
 *  name paretemer and state.val are returned to changeHandler function
 */
const InputField: React.FunctionComponent<{
  name: string;
  label: string;
  type: string;
  changeHandler: (key: string, val: string) => void;
}> = props => {
  const [val, setVal] = useState("");

  const handleChange = e => {
    setVal(e.target.value);
    props.changeHandler(props.name, e.target.value);
  };

  return (
    <div className="input-field">
      {props.label}
      <input
        type={props.type}
        name={props.name}
        onChange={handleChange}
        value={val}
        className="w3-input w3-border w3-round-large"
      />
    </div>
  );
};
export default InputField;
