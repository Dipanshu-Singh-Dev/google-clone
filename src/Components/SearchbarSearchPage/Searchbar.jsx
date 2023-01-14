import React from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  let navigate = useNavigate();
  const [state, setstate] = React.useState("/");
  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={(e) => (e.target.value ? setstate(e.target.value) : null)}
        className={style.input}
      />
      <div>
        <IconButton onClick={(e) => navigate(`/${state}`)}>
          <SearchIcon fontSize="small" className={style.search} />
        </IconButton>
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
