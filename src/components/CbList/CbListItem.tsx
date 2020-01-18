import React from "react";

const CbListItem: React.FunctionComponent<{
  title: string;
  item: Object;
}> = props => {
  return (
    <div className={"cb-list-item"}>
      <h1>{props.title}</h1>
    </div>
  );
};
export default CbListItem;
