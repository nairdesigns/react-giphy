import React from "react";

const SearchBar = () => {
  const handleChange = (event) => {
    event.currentTarget.value;
  };
  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={handleChange}
    />
  );
};
export default SearchBar;
