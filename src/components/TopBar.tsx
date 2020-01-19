import React, { useContext } from "react";
import { AppContext } from "../contexts/_index";

const TopBar: React.FunctionComponent<{}> = () => {
  const { title, logo, styles } = useContext(AppContext).state;
  return (
    <div className={styles.topbar}>
      <img src={logo} className={styles.topbarLogo} alt="logo" />
      <span className={styles.topbarTitle}>{title}</span>
    </div>
  );
};
export default TopBar;
