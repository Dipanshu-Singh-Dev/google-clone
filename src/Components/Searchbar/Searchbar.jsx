import React from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { IconButton } from "@mui/material";
const Searchbar = () => {
  return (
    <div className={style.container}>
      <IconButton>
        <SearchIcon fontSize="small" className={style.search} />
      </IconButton>
      <input type="text" className={style.input} />
      <div>
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <ImageSearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Searchbar;
