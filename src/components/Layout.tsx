import React from "react";
import { TopBar, SideBar, ContentPane } from "./_index";
import "../assets/Layout.css";

const Layout: React.FunctionComponent<{}> = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <TopBar />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <ContentPane />
      </div>
    </div>
  );
};
export default Layout;
