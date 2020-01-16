import React, { useContext } from "react";
import Context from "../contexts/_index";

const TopBar: React.FunctionComponent<{}> = () => {
  const { context, style } = useContext(Context);
  return (
    <div className={style.topbar}>
      <img src={context.logo} className={style.topbarLogo} alt="logo" />
      <span className={style.topbarTitle}>{context.title}</span>
    </div>
  );
};
export default TopBar;
