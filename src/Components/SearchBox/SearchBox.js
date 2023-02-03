import React from "react";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import "./SearchBox.css";

export const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      navigateToResultPage();
    }
  };

  const navigateToResultPage = () => {
    navigate(`/result/${query}`);
  };

  return (
    <section>
      <div className="container">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search-city">
            Search City
          </InputLabel>
          <OutlinedInput
            value={query}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            id="outlined-adornment-search-city"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={navigateToResultPage} edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            label="Search City"
          />
        </FormControl>
      </div>
    </section>
  );
};
