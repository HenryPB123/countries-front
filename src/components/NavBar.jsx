import React from "react";
import Filters from "./Filters";
import Orders from "./Orders";
import SearchBar from "./SearchBar";
import "./styles/Navbar.css";

const NavBar = () => {
  return (
    <div className="container-nav">
      <SearchBar />
      <Filters />
      <Orders />
    </div>
  );
};
export default NavBar;
