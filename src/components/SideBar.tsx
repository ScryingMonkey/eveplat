import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../contexts/_index";

const SideBar: React.FunctionComponent<{}> = props => {
  const context = useContext(Context);
  return (
    <div className={context.style.sidebar}>
      {context.state.routes.map((item, index) => {
        return (
          <div key={index}>
            <Link
              to={item.route}
              className={context.style.sidebarListItem}
              onClick={() => context.funcs.sidebarItemClick(item.label)}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
