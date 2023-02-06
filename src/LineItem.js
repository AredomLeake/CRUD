import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.chechked}
        onChange={() => handleCheck(item.id)}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        arial-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
