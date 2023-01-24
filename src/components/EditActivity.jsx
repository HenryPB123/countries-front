/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getActivities,
  getUpdateActivity,
} from "../store/slices/activities/controllersActivities";

const EditActivity = () => {
  //activities
  const { activities, idCountry } = useSelector((state) => state.activities);
  const { id } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();

  let activityFound = {};
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  if (Array.isArray(activities)) {
    activities.map((activity) => {
      if (activity.id === id) {
        activityFound = activity;
      }
    });
  }

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
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    validateEditInput();
    history.goBack(`detail/${idCountry}`);
  }

  function backButton() {
    history.goBack(`detail/${idCountry}`);
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
            min={1}
            max={5}
            // value={input.difficulty}
            defaultValue={activityFound.difficulty}
            onChange={(e) => handleInputChange(e)}
          />
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
          <div>Especifica la duración, horas, días, semanas, etc.</div>
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
        </div>

        <br />
        <div>
          <label htmlFor="4">
            <div>Seasons</div>
          </label>
          <br />
          <label htmlFor="summer">
            Summer
            <input
              style={{ marginRight: "15px" }}
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
              style={{ marginRight: "15px" }}
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
              style={{ marginRight: "15px" }}
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
              style={{ marginRight: "15px" }}
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

        <button className="buttons" onClick={() => backButton()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditActivity;
