import React from "react";

function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={e => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBox;