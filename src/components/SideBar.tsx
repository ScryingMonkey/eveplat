import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../contexts/_index";

const SideBar: React.FunctionComponent<{}> = () => {
  const { context, style, funcs } = useContext(Context);
  return (
    <div className={style.sidebar}>
      {context.routes.map((item, index) => {
        return (
          <div key={index}>
            <Link
              to={item.route}
              className={style.sidebarListItem}
              onClick={() => funcs.sidebarItemClick(item.label)}
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
