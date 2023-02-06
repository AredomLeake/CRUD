import React from "react";
import Header from "./Header";

import AddItem from "./AddItem";
import Search from "./Search";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setitems] = useState(
    JSON.parse(localStorage.getItem("shopinglist"))
  );
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setitems(newItems);
    localStorage.setItem("shopinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, chechked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, chechked: !item.chechked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search Search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
