import React from "react";
import style from "./LogoContainer.module.css";
const LogoContainer = () => {
  return (
    <div className={style.LogoContainer}>
      <img alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} />
    </div>
  );
};

export default LogoContainer;
