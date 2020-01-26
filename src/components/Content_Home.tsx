import React, { useContext } from "react";
import { AppContext } from "../contexts/_index";

const ContentPane: React.FunctionComponent<{}> = props => {
  const { state } = useContext(AppContext);
  const { styles, funcs } = state;

  return (
    <div className={styles.content}>
      <h1>Home</h1>
      <p>This is a test app to demonstrate basic patterns in React.</p>
    </div>
  );
};
export default ContentPane;
