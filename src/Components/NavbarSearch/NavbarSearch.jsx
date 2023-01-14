import React from "react";
import styles from "./NavbarSearch.module.css";
import SearchBar from "../SearchbarSearchPage/Searchbar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
const NavbarSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topleft}>
          <img
            className={styles.logo}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
          />
          <SearchBar />
        </div>
        <div className={styles.topright}>
          <IconButton>
            <SettingsIcon fontSize="medium" />
          </IconButton>
          <IconButton>
            <AppsIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.optionsContainer}>
          <div className={styles.options}>
            <SearchIcon />
            <p>All</p>
          </div>
          <div className={styles.options}>
            <SlideshowIcon />
            <p>Videos</p>
          </div>
          <div className={styles.options}>
            <NewspaperIcon />
            <p>News</p>
          </div>
          <div className={styles.options}>
            <ImageIcon /> <p>Images</p>
          </div>
          <div className={styles.options}>
            <LocalOfferIcon /> <p>Shopping</p>
          </div>
          <div className={styles.options}>
            <MoreVertIcon /> <p>More</p>
          </div>
        </div>
        <div>Tools</div>
      </div>
    </div>
  );
};

export default NavbarSearch;
