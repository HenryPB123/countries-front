import React from "react";
import Countries from "./Countries";
import NavBar from "./NavBar";
import "./styles/Main.css";

const Main = () => {
  return (
    <div className="container_main ">
      <NavBar />
      <Countries />
    </div>
  );
};

export default Main;
