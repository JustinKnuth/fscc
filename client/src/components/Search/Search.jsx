import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <div className="inner-container">
          {/* <img
          className="search-icon"
          src="https://i.imgur.com/8dfJFh0.png"
          alt="search"
          width="100px"
        /> */}
          <label className="search" for="search-input">
            {/* <form className="search-form" onSubmit={(e) => props.onSubmit(e)}> */}
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
            {/* </form> */}
          </label>
        </div>
      </div>
    </>
  );
};

export default Search;
