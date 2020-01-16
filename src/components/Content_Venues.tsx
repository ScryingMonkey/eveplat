import React, { useContext } from "react";
import { Context } from "../contexts/_index";

const ContentVenues: React.FunctionComponent<{}> = props => {
  const { style, funcs } = useContext(Context);
  return (
    <div className={style.content}>
      <h1 onClick={funcs.testFunc}>Venues Content</h1>
    </div>
  );
};
export default ContentVenues;
