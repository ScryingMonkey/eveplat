import React, { useContext } from "react";
import { AppContext } from "../contexts/_index";

const ContentVenues: React.FunctionComponent<{}> = props => {
  //TODO: Write Venues feature
  const { styles, funcs } = useContext(AppContext).state;
  return (
    <div className={styles.content}>
      <h1 onClick={funcs.testFunc}>Venues Content</h1>
    </div>
  );
};
export default ContentVenues;
