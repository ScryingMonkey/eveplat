import logo from "../assets/logo.svg";

const context = {
  testKey: "testValue",
  title: "Default Title",
  logo: logo,
  events: [],
  venues: [],
  routes: [
    { label: "Home", route: "/", exact: true },
    { label: "Events", route: "/events" },
    { label: "Venues", route: "/venues" },
    { label: "Reports", route: "/reports" },
    { label: "Settings", route: "/settings" }
  ]
};
export default context;
