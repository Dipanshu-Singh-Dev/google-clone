import React from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setstate] = React.useState("/");
  return (
    <div className={style.container}>
      <IconButton onClick={(e) => navigate(`/search`)}>
        <SearchIcon fontSize="small" className={style.search} />
      </IconButton>
      <input
        type="text"
        onChange={(e) =>
          e.target.value
            ? dispatch({ type: "query", payload: e.target.value })
            : null
        }
        className={style.input}
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
