import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/SearchBar.css";
import { Link } from "react-router-dom";
import {
  getCountries,
  getCountry,
} from "../store/slices/countries/controllersCountries";

const SearchBar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function onChange(e) {
    setName(e.target.value);
  }

  function onClick(e) {
    dispatch(getCountry(name));
    setName("");
  }

  function onClickBack() {
    dispatch(getCountries());
  }

  return (
    <div>
      <button className="buttons" onClick={() => onClickBack()}>
        All Countries
      </button>
      <input
        className="input"
        type="text"
        onChange={(e) => onChange(e)}
        placeholder="Search country"
        value={name}
      />
      <button className="buttons" onClick={() => onClick(name)}>
        Buscar
      </button>

      <Link to="/create">
        <button className="buttons">Create Activity</button>
      </Link>
    </div>
  );
};

export default SearchBar;
