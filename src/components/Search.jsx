import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Style from "./Search.module.css";
const Search = ({ loadUser }) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className={Style.search}>
      <h2>Busque por um usúario:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={Style.search_container}>
        <input
          type="text"
          placeholder="Digite o nome de um usúario"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
