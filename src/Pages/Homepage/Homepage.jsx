import React from "react";
import NavbarHome from "../../Components/NavbarHome/NavbarHome";
import LogoContainer from "../../Components/LogoContainer/LogoContainer";
import Searchbar from "../../Components/Searchbar/Searchbar";
const Homepage = () => {
  return (
    <div>
      <NavbarHome />
      <LogoContainer />
      <Searchbar />
    </div>
  );
};

export default Homepage;
