import React from "react";
import { useRef, useEffect } from "react";

function SearchBar({ onSearch }) {
  const searchRef = useRef(null);
  const handleSearch = () => {
    const value = searchRef.current.value;
    onSearch(value);
  };
  const onKeyPressed = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div>
        <span>YourTube</span>
      </div>
      <div>
        <input
          type='text'
          placeholder='검색'
          ref={searchRef}
          onKeyPress={onKeyPressed}
        ></input>
        <button onClick={handleSearch}>검색</button>
      </div>
    </>
  );
}

export default SearchBar;
