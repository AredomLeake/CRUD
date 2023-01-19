import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
const Content = () => {
  const [items, setitems] = useState([
    {
      id: 1,
      chechked: false,
      item: "one half pound bag of coca",
    },
    {
      id: 2,
      chechked: false,
      item: "item2",
    },
    {
      id: 3,
      chechked: false,
      item: "item3",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, chechked: !item.chechked } : item
    );
    setitems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setitems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  return (
    <main className="main">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.chechked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={
                  item.checked
                    ? {
                        textDecoration: "line-through",
                      }
                    : null
                }
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
