// axios
import axios from "axios";
import {
  delActivity,
  setActivities,
  setActivitiesNames,
  setActivity,
  setIdCountry,
  updateActivity,
} from "../activitiesSlice";

export const createActivity = (input) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/activities`, input)
      .then((response) => {
        dispatch(setActivity(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteActivity = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/activities/?id=${id}`)
      .then((response) => {
        dispatch(delActivity(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getActivitiesNames = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/activities`)
      .then((response) => {
        dispatch(setActivitiesNames(response.data.activitiesNames));
      })
      .catch((error) => console.log(error));
  };
};

export const getActivities = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/activities`)
      .then((response) => {
        dispatch(setActivities(response.data.activities));
      })
      .catch((error) => console.log(error));
  };
};

export const getUpdateActivity = (id, input) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/activities/?id=${id}`, input)
      .then((response) => {
        dispatch(updateActivity(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getIdCountry = (id) => {
  return setIdCountry(id);
};
