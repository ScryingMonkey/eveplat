import logo from "../assets/logo.svg";
import uuid from "uuid";

const defaultContext = {
  state: {
    testKey: "testValue",
    title: "Default Title",
    logo: logo,
    routes: [
      { label: "Home", route: "/", exact: true },
      { label: "Events", route: "/events" },
      { label: "Venues", route: "/venues" },
      { label: "Reports", route: "/reports" },
      { label: "Settings", route: "/settings" }
    ]
  },
  style: {
    topbar: "topbar",
    topbarTitle: "topbar-title",
    topbarLogo: "App-logo topbar-logo",
    topbarListItem: "topbar-list-item",
    sidebar: "sidebar",
    sidebarListItem: "sidebar-item-item",
    content: "content-pane",
    colors: {
      "dark-primary-color": "#ffa000",
      "default-primary-color": "#ffc107",
      "light-primary-color": "#ffecb3",
      "text-primary-color": "#212121",
      "accent-color": "#e040fb",
      "primary-text-color": "#212121",
      "secondary-text-color": "#757575",
      "inverted-text-color": "#f8ebc5",
      "divider-color": "#bdbdbd"
    }
  },
  funcs: {
    sidebarItemClick: (label: string) => {
      console.log(`...user clicked on [${label}]`);
    },
    testFunc: () => {
      alert("test function from context!");
    }
  }
};
export default defaultContext;
