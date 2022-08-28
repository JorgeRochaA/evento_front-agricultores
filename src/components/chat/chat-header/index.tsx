import { useState } from "react";
import "./messageHeaderStyles.css";

interface items {
  onSearch?: (value: string) => void;
}

function MessageHeader(itemsObj: items) {
  const [data, setData] = useState("");

  const handleEnterKey = (event: any) => {
    if (event.key === "Enter") {
      if (typeof itemsObj.onSearch === "function") {
        itemsObj.onSearch(data);
      }
    }
  };

  const showBtnClear = () => (data.length !== 0 ? true : false);

  const clearInput = () => {
    setData("");
    if (typeof itemsObj.onSearch === "function") {
      itemsObj.onSearch("");
    }
  };

  const handleChange = (event: any) => {
    if (event.target.value.length === 0) {
      setData("");
      if (typeof itemsObj.onSearch === "function") {
        itemsObj.onSearch("");
      }
    } else {
      setData(event.target.value);
    }
  };

  return (
    <div className="main-container test">
      <h3 className="title">CHATS</h3>
      <div className="secondary-container">
        <input
          id="input"
          type="text"
          value={data}
          className="input"
          placeholder="Buscar..."
          autoComplete="off"
          onChange={handleChange}
          onKeyPress={(event) => handleEnterKey(event)}
        />
        <button
          className={showBtnClear() ? "btnClear show" : "noShow"}
          onClick={clearInput}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default MessageHeader;
