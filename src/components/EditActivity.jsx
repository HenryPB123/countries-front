/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getActivities,
  getUpdateActivity,
} from "../store/slices/activities/controllersActivities";

const EditActivity = () => {
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({
    nameActivity: "",
    difficulty: 0,
    duration: "",
    description: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    nameActivity: "",
    difficulty: "",
    duration: "",
    description: "",
    season: "",
  });

  //activities
  const { activities } = useSelector((state) => state.activities);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  let activityFound = {};

  activities.map((activity) => {
    if (activity.id === id) {
      activityFound = activity;
    }
  });
  console.log("activities", activities);

  let inputado = {};
  editInput.nameActivity !== "" &&
    (inputado.nameActivity = editInput.nameActivity);
  editInput.difficulty !== 0 && (inputado.difficulty = editInput.difficulty);
  editInput.duration !== "" && (inputado.duration = editInput.duration);
  editInput.description !== "" &&
    (inputado.description = editInput.description);
  editInput.season !== "" && (inputado.season = editInput.season);

  const validateEditInput = () => {
    let errors = {};

    if (
      editInput.nameActivity.length > 0 &&
      /\d/.test(editInput.nameActivity)
    ) {
      setErrors({
        ...errors,
        nameActivity: "El nombre no debe contener números",
      });
    } else if (editInput.difficulty > 0) {
      if (editInput.difficulty > 5 || editInput.difficulty < 1) {
        setErrors({
          ...errors,
          difficulty: "El valor númerico debe estar en rango de 1 a 5",
        });
      }
    } else if (editInput.duration.length > 0) {
      setErrors({
        ...errors,
        duration:
          "Agrega el tiempo que dura la actividad especificando horas,semanas,etc",
      });
    } else if (editInput.season.length > 0) {
      setErrors({
        ...errors,
        season: "Selecciona la temporada donde se va a realizar la actividad",
      });
    } else {
      if (
        editInput.nameActivity === "" &&
        editInput.difficulty === 0 &&
        editInput.duration === "" &&
        editInput.description === "" &&
        editInput.season === ""
      ) {
        alert("No hay datos para actualizar");
      } else {
        dispatch(getUpdateActivity(id, inputado));
        alert("Actividad actualizada");
      }
    }
  };

  function handleInputChange(e) {
    if (e.target.name === "difficulty") {
      setEditInput({
        ...editInput,

        [e.target.name]: Number(e.target.value),
      });
    } else {
      setEditInput({
        ...editInput,

        [e.target.name]: e.target.value,
      });
    }
  }

  function handleCheck(e, season) {
    if (e.target.checked) {
      setEditInput({
        ...editInput,
        season: season,
      });
    } else {
      alert("Debes elegir una temporada");
    }
  }

  function handleEdit(e) {
    validateEditInput();
    e.preventDefault();
  }

  return (
    <div className="container_form">
      <form>
        <h1>Edit Activity</h1>

        <div>
          <p>
            <b>
              Borra y modifica los datos que quieras cambiar en la actividad
            </b>
          </p>
        </div>

        <div>
          <label htmlFor="1">Name: </label>
          <input
            id="1"
            type="text"
            name="nameActivity"
            // value={input.nameActivity}
            defaultValue={activityFound.name}
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
            // value={input.difficulty}
            defaultValue={activityFound.difficulty}
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
            // value={input.duration}
            defaultValue={activityFound.duration}
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
            // value={input.description}
            defaultValue={activityFound.description}
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
              // value="summer"
              defaultChecked={activityFound.season === "summer"}
              onChange={(e) => handleCheck(e, "summer")}
            />
          </label>
          <label htmlFor="autumn">
            Autumn
            <input
              id="autumn"
              type="radio"
              name="seasons"
              // value="autumn"
              defaultChecked={activityFound.season === "autumn"}
              onChange={(e) => handleCheck(e, "autumn")}
            />
          </label>

          <label htmlFor="winter">
            Winter
            <input
              id="winter"
              type="radio"
              name="seasons"
              // value="winter"
              defaultChecked={activityFound.season === "winter"}
              onChange={(e) => handleCheck(e, "winter")}
            />
          </label>

          <label htmlFor="spring">
            Spring
            <input
              id="spring"
              type="radio"
              name="seasons"
              // value="spring"
              defaultChecked={activityFound.season === "spring"}
              onChange={(e) => handleCheck(e, "spring")}
            />
          </label>
          {errors.season && <p>{errors.season}</p>}
        </div>
      </form>
      <br />
      <div>
        <button
          className="buttons"
          type="submit"
          onClick={(e) => handleEdit(e)}
        >
          Edit Activity
        </button>

        <Link to="/main">
          <button className="buttons">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default EditActivity;
