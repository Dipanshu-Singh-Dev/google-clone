import React from "react";
import style from "./ExternalLink.module.css";
const ExternalLink = (props) => {
  let { title } = props;
  return (
    <a className={style.comp} href="#">
      {title}
    </a>
  );
};

export default ExternalLink;
