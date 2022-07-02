import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, onNameChange] = useState("");
  const [category, onCategoryChange] = useState("Produce");

  function nameCallBack(event) {
    onNameChange(event.target.value);
  }

  function categoryCallBack(event) {
    onCategoryChange(event.target.value);
  }

  function formCallBack(event) {
    event.preventDefault();
    console.log("onItemFormSubmit() method called");

    const newItem = {};
    newItem["category"] = category;
    newItem["name"] = name;
    newItem["id"] = uuid();

    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={formCallBack}>
      <label>
        Name:
        <input onChange={nameCallBack} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={categoryCallBack} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
