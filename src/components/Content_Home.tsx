import React, { useContext } from "react";
import { Context } from "../contexts/_index";

const ContentPane: React.FunctionComponent<{}> = props => {
  const { context, funcs, style } = useContext(Context);

  return (
    <div className={style.content}>
      <h1 onClick={funcs.testFunc}>Home</h1>
      <p>This is a test app to demonstrate basic patterns in React.</p>
    </div>
  );
};
export default ContentPane;
