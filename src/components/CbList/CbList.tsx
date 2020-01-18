import React from "react";
import CbListItem from "./CbListItem";

const CbList: React.FunctionComponent<{
  items: { title: string }[];
  className: string;
}> = props => {
  return (
    <div className={"cb-list" + props.className}>
      {props.items.map((item: { title: string }, i: number) => {
        return <CbListItem title={item.title} item={item} key={i} />;
      })}
    </div>
  );
};
export default CbList;
