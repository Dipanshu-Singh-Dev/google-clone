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
      <IconButton onClick={() => navigate(`/search`)}>
        <SearchIcon fontSize="small" className={style.search} />
      </IconButton>
      <input
        type="text"
        onChange={(e) => {
          return e.target.value
            ? dispatch({ type: "searchBar/query", payload: e.target.value })
            : null;
        }}
        onKeyDown={(e) => (e.code === "Enter" ? navigate("/search") : null)}
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
