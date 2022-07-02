import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems, onItemFormSubmit }) {
  // Child component (Filter) section:
  const [search, onSearchChange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) => item["name"].toLowerCase().includes(search));

  return (
    <>
      <div className="ShoppingList">
        <ItemForm onItemFormSubmit={onItemFormSubmit} />
        <Filter
          onCategoryChange={handleCategoryChange}
          onSearchChange={onSearchChange}
        />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShoppingList;
