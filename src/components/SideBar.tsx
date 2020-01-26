import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/_index";
import {CbRoute} from '../types/_index';

const SideBar: React.FunctionComponent<{}> = () => {
  const { routes, styles, funcs } = useContext(AppContext).state;

  return (
    <div className={styles.sidebar}>
      {routes.map((route, index) => {
        return (
          <div key={index}>
            <Link
              to={route.route}
              className={styles.sidebarListItem}
              onClick={() => funcs.sidebarItemClick(route.label)}
            >
              {route.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
