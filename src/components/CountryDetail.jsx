import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Activity from "./Activity,";
import "./styles/CountryDetail.css";
import "./styles/Activity.css";
import { getCountryDetail } from "../store/slices/countries/controllersCountries";
import {
  deleteActivity,
  getIdCountry,
} from "../store/slices/activities/controllersActivities";

const CountryDetail = () => {
  const { countryDetail } = useSelector((state) => state.countries);
  const [activities, setActivities] = useState([]);
  const { id } = useParams();
  let history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    setActivities(countryDetail.activities);
  }, [countryDetail]);

  function onClickDelete(id) {
    let actis = [...activities];
    let activitiesFiltered = actis.filter((activity) => activity.id !== id);
    setActivities(activitiesFiltered);
    dispatch(deleteActivity(id));
  }

  const editButton = (idActi) => {
    dispatch(getIdCountry(id));
    history.push(`/edit/${idActi}`);
  };

  return (
    <div className="container_detail">
      {countryDetail ? (
        <div className="container_CA">
          <div className="container_dtcountries ">
            <img className="flag_detail" src={countryDetail.flag} alt="img" />
            <h1>{countryDetail.name}</h1>
            <div className="div_dos">
              <div>
                <b>Capital: </b>
                {countryDetail.capital}
              </div>
              <div>
                <b>Continente: </b>
                {countryDetail.continent}
              </div>
              <div>
                <b>Subregion: </b>
                {countryDetail.subregion}
              </div>
              <div>
                <b>Pobalción: </b>
                {countryDetail.population} habitantes
              </div>
              <div>
                <b>Área: </b>
                {countryDetail.area} millones de Km
              </div>
            </div>
            <Link className="div_link" to="/main">
              <div className="buttons">Back</div>
            </Link>
          </div>
          {activities?.length > 0 && (
            <div className="container_actis">
              <div className="title_one">
                <h1>Actividades</h1>
              </div>
              <div>
                {activities?.map((activity, i) => (
                  <div className="activity_dos" key={i}>
                    <div className="activity" key={activity.id}>
                      <Activity
                        id={activity.id}
                        name={activity.name}
                        season={activity.season}
                        duration={activity.duration}
                        difficulty={activity.difficulty}
                        description={activity.description}
                      />
                    </div>
                    <button
                      className="buttons"
                      onClick={() => editButton(activity.id)}
                    >
                      Editar
                    </button>
                    {/* <Link to={`/edit/${activity.id}`}>
                      <button className="buttons">Editar</button>
                    </Link> */}
                    <button
                      className="buttons"
                      onClick={() => onClickDelete(activity.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <img
            src="https://i.pinimg.com/originals/de/c0/20/dec0208130c89d6421f5bddbae495df8.gif"
            alt="img-loading"
          />
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
