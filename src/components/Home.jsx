import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="container_home">
      <div>
        <h1 className="title">Bienvenidos a la aplicación de Countries</h1>
      </div>
      <div>
        <div>
          <Link to="/main">
            <button className="button">Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
