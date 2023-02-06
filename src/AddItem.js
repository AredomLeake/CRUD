import React from "react";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = { useRef };
  return (
    <form className="addform" onSubmit={handleSubmit}>
      <label htmlFor="additem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="additem"
        type="text"
        placeholder="additem"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="additem"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
