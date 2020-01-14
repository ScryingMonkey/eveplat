import React, { useContext } from "react";
import Context from "../contexts/_index";

const TopBar: React.FunctionComponent<{}> = () => {
  const context = useContext(Context);
  return (
    <div className={context.style.topbar}>
      <img
        src={context.state.logo}
        className={context.style.topbarLogo}
        alt="logo"
      />
      <span className={context.style.topbarTitle}>{context.state.title}</span>
    </div>
  );
};
export default TopBar;
