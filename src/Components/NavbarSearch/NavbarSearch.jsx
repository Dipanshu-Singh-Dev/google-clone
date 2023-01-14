import React from "react";
import style from "./NavbarSearch.module.css";
import SearchBar from "../SearchbarSearchPage/Searchbar";
const NavbarSearch = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img
          alt="logo"
          className={style.logo}
          src={process.env.PUBLIC_URL + "/images/logo.png"}
        />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavbarSearch;
