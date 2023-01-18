import React, { useReducer } from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, getState, useSelector } from "react-redux";

const Searchbar = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setstate] = React.useState("/");

  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={(e) => setstate(e.target.value)}
        className={style.input}
        onKeyDown={(e) =>
          e.code === "Enter"
            ? dispatch({ type: "query", payload: state })
            : null
        }
      />
      <div className={style.IconButtons}>
        <IconButton
          onClick={(e) => {
            dispatch({ type: "query", payload: state });
            navigate(`/search`);
          }}
        >
          <SearchIcon fontSize="small" className={style.search} />
        </IconButton>
        <IconButton>
          <MicIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ImageSearchIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default Searchbar;
