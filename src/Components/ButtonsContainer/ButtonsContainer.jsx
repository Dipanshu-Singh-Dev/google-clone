import React from "react";
import style from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  return (
    <div>
      <button className={style.btn}>Google Search</button>
      <button className={style.btn}>I'm Feeling Lucky</button>
    </div>
  );
};

export default ButtonsContainer;
