import React from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ val }) => {
  console.log(val);
  let navigate = useNavigate();
  const [state, setstate] = React.useState("/");
  return (
    <div className={style.container}>
      <IconButton onClick={(e) => navigate(`/${state}`)}>
        <SearchIcon fontSize="small" className={style.search} />
      </IconButton>
      <input
        type="text"
        onChange={(e) => (e.target.value ? setstate(e.target.value) : null)}
        className={style.input}
        value={val}
      />
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
