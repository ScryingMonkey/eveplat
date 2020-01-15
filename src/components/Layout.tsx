import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  TopBar,
  SideBar,
  ContentPane,
  ContentEvents,
  ContentVenues
} from "./_index";
import "../assets/Layout.css";

const Layout: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <TopBar />
        </div>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={ContentPane} />
            <Route exact path="/events" component={ContentEvents} />
            <Route path="/venues" component={ContentVenues} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Layout;
