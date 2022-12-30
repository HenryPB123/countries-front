import React from "react";
import { Link } from "react-router-dom";
import "./styles/Country.css";

const Country = ({ flag, name, continent, id }) => {
  return (
    <div className="container_country">
      <img className="flag" src={flag} alt="img" />
      <p className="title_card">{name}</p>
      <div className="continent">{continent}</div>
      <Link className="link_back" to={`/detail/${id}`}>
        <div className="buttons">More</div>
      </Link>
    </div>
  );
};

export default Country;
