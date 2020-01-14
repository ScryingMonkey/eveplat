import React, { useContext } from "react";
import { Context } from "../contexts/_index";

const ContentPane: React.FunctionComponent<{}> = props => {
  const context = useContext(Context);
  return (
    <div className={context.style.content}>
      <h1 onClick={context.funcs.testFunc}>ContentPane</h1>
    </div>
  );
};
export default ContentPane;
