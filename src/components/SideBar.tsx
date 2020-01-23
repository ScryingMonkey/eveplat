import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, CbRoute } from "../contexts/_index";

const SideBar: React.FunctionComponent<{}> = () => {
  const { state, f } = useContext(AppContext);
  const { routes, styles, funcs } = state;

  const addRoute = () => {
    let nr: CbRoute = { label: "test", route: "test" };
    f.addRoute(nr);
    console.log("routes:");
    console.log(routes.data);
  };
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
