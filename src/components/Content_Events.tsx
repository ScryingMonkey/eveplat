import React, { useContext } from "react";
import { Context } from "../contexts/_index";

const ContentEvents: React.FunctionComponent<{}> = props => {
  const context = useContext(Context);
  return (
    <div className={context.style.content}>
      <h1 onClick={context.funcs.testFunc}>Events Content</h1>
    </div>
  );
};
export default ContentEvents;
