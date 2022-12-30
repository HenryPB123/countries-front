import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../store/slices/countries/controllersCountries";
import Country from "./Country";
import Pagination from "./Pagination";
import "./styles/Countries.css";

const Countries = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesByPage, setCountriesByPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesByPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesByPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className="container_pag">
        {currentCountries.length > 0 && (
          <div>
            <Pagination
              countriesByPage={countriesByPage}
              countries={countries.length}
              paginado={paginado}
            />
          </div>
        )}
      </div>
      <div className="container_countries">
        {currentCountries.length > 0 ? (
          currentCountries.map((country) => (
            <div key={country.id}>
              <Country
                key={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
                id={country.id}
              />
            </div>
          ))
        ) : countries.length === 0 ? (
          <div>
            <img
              src="https://i.pinimg.com/originals/de/c0/20/dec0208130c89d6421f5bddbae495df8.gif"
              alt="img-loading"
            />
            <h2>Este nombre no corresponde a un país</h2>
          </div>
        ) : (
          <div className="loading">
            <img
              src="https://i.pinimg.com/originals/de/c0/20/dec0208130c89d6421f5bddbae495df8.gif"
              alt="img-loading"
            />
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
