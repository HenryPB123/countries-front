import React from "react";
import "./styles/Pagination.css";

const Pagination = ({ countriesByPage, countries, paginado, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesByPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container_pag">
      {pageNumbers &&
        pageNumbers.map((number) => {
          return (
            <button
              className="button_pag"
              key={number}
              onClick={() => paginado(number)}
              style={
                number === currentPage
                  ? {
                      backgroundColor: "#e29578",
                      color: "white",
                      border: "solid 2px #004e89",
                    }
                  : {}
              }
            >
              {number}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
