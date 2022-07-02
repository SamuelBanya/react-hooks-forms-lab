import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  function filterCallBack(event) {
    console.log(event.target.value);
    onSearchChange(event.target.value.toLowerCase());
  }

  return (
    <div className="Filter">
      <input
        onChange={filterCallBack}
        type="text"
        name="search"
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
