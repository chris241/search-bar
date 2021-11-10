import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const handleUserKeyDown = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.filter((val) =>
            val.title.toLowerCase().includes(text.toLowerCase())
          )
        )
      );
  };
  const clearText = () => {
    setText("")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setData(json));
  }
  return (
    <div>
      <div className="head">
        <div className="blockSearch">
          <input
            type="text"
            className="ch"
            placeholder="Enter your search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleUserKeyDown}
          />
          {text.length > 0 && (
            <span className="clearSearch" onClick={() => clearText()}>
              X
            </span>
          )}
        </div>
      </div>
      <div className="search_result">
        {data  && data.length !== 0  ? 
          data.map((item) => (
            <li key={item.id}>
              {item.id} - {item.title}
            </li>
          )): <li>NO DATA</li>}
      </div>
    </div>
  );
};

export default Search;
