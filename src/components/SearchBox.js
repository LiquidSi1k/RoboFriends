import React from "react";
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search your robot"
        className="pa3 ba b--green bg-lightest-blue pointer br3"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
