import React from "react";
import style from "./Footer.module.css";
import ExternalLink from "../ExternalLink/ExternalLink";
const Footer = () => {
  function showPosition(position, locationUpdater) {
    setlatLong(`${position.coords.latitude},${position.coords.longitude}`);
  }
  let [latLong, setlatLong] = React.useState();

  navigator.geolocation.getCurrentPosition(showPosition, setlatLong);

  console.log(navigator.geolocation);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <p>{latLong && `${latLong}`}</p>
      </div>
      <div className={style.bottom}>
        <div className={style.footer_sub_container}>
          <ExternalLink title="About" type="foot" />
          <ExternalLink title="Advertising" type="foot" />
          <ExternalLink title="Business" type="foot" />
          <ExternalLink title="How Search Works" type="foot" />
        </div>
        <div className={style.footer_sub_container}>
          <ExternalLink title="Privacy" type="foot" />
          <ExternalLink title="Terms" type="foot" />
          <ExternalLink title="Settings" type="foot" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
