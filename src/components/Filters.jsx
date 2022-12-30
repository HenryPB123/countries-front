import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivitiesNames } from "../store/slices/activities/controllersActivities";
import {
  getContinent,
  getCountriesWithActivities,
} from "../store/slices/countries/controllersCountries";

import "./styles/SearchBar.css";

const Filters = () => {
  const dispatch = useDispatch();
  const { activitiesNames } = useSelector((state) => state.activities);

  const [continent, setContinent] = useState("");
  useEffect(() => {
    dispatch(getActivitiesNames());
  }, []);

  function onChangeFilter(e) {
    setContinent(e.target.value);
    dispatch(getContinent(e.target.value));
  }

  function onChangeSelect(e) {
    dispatch(getCountriesWithActivities(e.target.value));
  }

  return (
    <div>
      <select
        className="buttons"
        id="continents"
        name="continents"
        value={continent}
        onChange={(e) => onChangeFilter(e)}
      >
        <option value="">Filtrado por Continente</option>
        <option value="All">All continents</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Antarctic">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>

      <select className="buttons" onChange={(e) => onChangeSelect(e)}>
        <option value="">Filtrado por actividad</option>
        {activitiesNames.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filters;
