import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <div className="inner-container">
          <label className="search" htmlFor="search-input">
            <input
              onSubmit={(e) => props.onSubmit(e)}
              className="search-input"
              value={props.value}
              onChange={(e) => props.onChange(e)}
              name="Search"
              placeholder="Search"
              type="text"
              autoFocus
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Search;
