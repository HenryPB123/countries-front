/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createActivity } from "../store/slices/activities/controllersActivities";
import { getCountries } from "../store/slices/countries/controllersCountries";
import "./styles/Forms.css";

const CreateActivity = () => {
  const dispatch = useDispatch();
  //countries
  const { countries: countriesOne } = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    nameActivity: "",
    difficulty: 0,
    duration: "",
    description: "",
    countries: [],
    season: "",
  });

  const [errors, setErrors] = useState({
    nameActivity: "",
    difficulty: "",
    duration: "",
    description: "",
    countries: "",
    season: "",
  });

  const validate = () => {
    let errors = {};
    if (input.nameActivity.length === 0) {
      setErrors({
        ...errors,
        nameActivity: "Se requiere un nombre para la actividad",
      });
    } else if (/\d/.test(input.nameActivity)) {
      setErrors({
        ...errors,
        nameActivity: "El nombre no debe contener números",
      });
    } else if (input.difficulty === 0) {
      setErrors({
        ...errors,
        difficulty: "Debes agregar un valor númerico",
      });
    } else if (input.difficulty > 5 || input.difficulty < 1) {
      setErrors({
        ...errors,
        difficulty: "El valor númerico debe estar en rango de 1 a 5",
      });
    } else if (input.duration.length <= 0) {
      setErrors({
        ...errors,
        duration:
          "Agrega el tiempo que dura la actividad especificando horas,semanas,etc",
      });
    } else if (input.description.length <= 0) {
      setErrors({
        ...errors,
        description: "Agrega una breve descripción de la actividad ",
      });
    } else if (input.season.length <= 0) {
      setErrors({
        ...errors,
        season: "Selecciona la temporada donde se va a realizar la actividad",
      });
    } else if (input.countries.length <= 0) {
      setErrors({
        ...errors,
        countries:
          "Debes elegir uno o más países a los que les vas a crear la actividad",
      });
    } else {
      dispatch(createActivity(input));
      alert("actvidad creada");
      setInput({
        nameActivity: "",
        difficulty: 0,
        duration: "",
        description: "",
        countries: [],
        season: "",
      });
    }
  };

  function handleInputChange(e) {
    if (e.target.name === "difficulty") {
      setInput({
        ...input,

        [e.target.name]: Number(e.target.value),
      });
    } else {
      setInput({
        ...input,

        [e.target.name]: e.target.value,
      });
    }
  }

  function handleCheck(e, season) {
    if (e.target.checked) {
      setInput({
        ...input,
        season: season,
      });
    } else {
      alert("Debes elegir una temporada");
    }
  }

  function handleDelete(country) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== country),
    });
  }

  function handleSelect(e) {
    let countriesList = [...input.countries, e.target.value];
    let countriesListFiltered = countriesList.filter((v, i) => {
      return countriesList.indexOf(v) === i;
    });

    setInput({
      ...input,
      countries: countriesListFiltered,
    });
  }

  function handleSubmit(e) {
    validate();
    e.preventDefault();
  }

  return (
    <div className="container_form ">
      <h1>Create Activity</h1>
      <br />
      <form>
        <div>
          <label htmlFor="1">Name: </label>

          <input
            id="1"
            type="text"
            name="nameActivity"
            value={input.nameActivity}
            // defaultValue={activityFound.name}
            onChange={(e) => handleInputChange(e)}
          />

          {errors.nameActivity && <p>{errors.nameActivity}</p>}
        </div>

        <br />
        <div>
          <label className="title_acti" htmlFor="2">
            Difficulty:
          </label>

          <input
            id="2"
            type="number"
            name="difficulty"
            value={input.difficulty}
            // defaultValue={activityFound.difficulty}
            onChange={(e) => handleInputChange(e)}
          />

          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>

        <br />
        <div>
          <label htmlFor="3">Duration: </label>

          <input
            id="3"
            type="text"
            name="duration"
            value={input.duration}
            // defaultValue={activityFound.duration}
            onChange={(e) => handleInputChange(e)}
          />

          {errors.duration && <p>{errors.duration}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="1">Description: </label>

          <textarea
            id="1"
            type="text"
            name="description"
            value={input.description}
            // defaultValue={activityFound.description}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>

        <br />
        <div>
          <label htmlFor="4">
            <div>Seasons</div>
          </label>
          <label htmlFor="summer">
            Summer
            <input
              id="summer"
              type="radio"
              name="seasons"
              value="summer"
              // defaultChecked={activityFound.season === "summer"}
              onChange={(e) => handleCheck(e, "summer")}
            />
          </label>
          <label htmlFor="autumn">
            Autumn
            <input
              id="autumn"
              type="radio"
              name="seasons"
              value="autumn"
              // defaultChecked={activityFound.season === "autumn"}
              onChange={(e) => handleCheck(e, "autumn")}
            />
          </label>

          <label htmlFor="winter">
            Winter
            <input
              id="winter"
              type="radio"
              name="seasons"
              value="winter"
              // defaultChecked={activityFound.season === "winter"}
              onChange={(e) => handleCheck(e, "winter")}
            />
          </label>

          <label htmlFor="spring">
            Spring
            <input
              id="spring"
              type="radio"
              name="seasons"
              value="spring"
              // defaultChecked={activityFound.season === "spring"}
              onChange={(e) => handleCheck(e, "spring")}
            />
          </label>
          {errors.season && <p>{errors.season}</p>}
        </div>

        <br />
        <div>
          <label htmlFor="5">
            <div>Add activity to country</div>{" "}
          </label>

          <select onChange={(e) => handleSelect(e)}>
            <option value=""></option>

            {countriesOne.map((country) => {
              return (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          {errors.countries && <p>{errors.countries}</p>}
          <br />

          <br />
          <label htmlFor="ulCountries">
            <div>List countries to send</div>
          </label>
          <ul id="ulCountries">
            {input.countries.map((country) => (
              <div key={country}>
                {country}
                <button onClick={() => handleDelete(country)}>X</button>
              </div>
            ))}
          </ul>
        </div>
      </form>
      <div>
        <button
          className="buttons"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Create Activity
        </button>

        <Link to="/main">
          <button className="buttons">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateActivity;
