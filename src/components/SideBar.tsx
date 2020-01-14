import React, { useContext } from "react";
import Context from "../contexts/_index";

const SideBar: React.FunctionComponent<{}> = props => {
  const context = useContext(Context);
  return (
    <div className={context.style.sidebar}>
      {context.state.sidebarItems.map(item => {
        return (
          <div
            className={context.style.sidebarListItem}
            onClick={() => context.funcs.sidebarItemClick(item.label)}
            key={item.id}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
