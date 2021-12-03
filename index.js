import React, { useState } from "react";
import {render} from 'react-dom';
import SearchBar from "./SearchBar";
import "./style.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const users = [
    { name: "Jack", id: "1" },
    { name: "Lisa", id: "2" },
    { name: "Peter", id: "3" },
    { name: "Roman", id: "4" },
    { name: "Sarah", id: "5" },
    { name: "Eric", id: "6" },
    { name: "Fiora", id: "7" },
  ];

  const filterNames = ({ name }) => {
    return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  return (
    <div className="App">
      <h2>Search</h2>
      <SearchBar onSearch={setSearchValue} value={searchValue} />
      <ul>
        {users.filter(filterNames).map((user) => {
          return <li key={user.id}>
            {user.name}
          </li>
        })}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root'));