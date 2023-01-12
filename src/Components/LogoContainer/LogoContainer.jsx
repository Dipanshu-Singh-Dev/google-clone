import React from "react";
import style from "./LogoContainer.module.css";
const LogoContainer = () => {
  return (
    <div className={style.LogoContainer}>
      <img
        alt="logo"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
    </div>
  );
};

export default LogoContainer;
