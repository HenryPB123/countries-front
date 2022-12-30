// axios
import axios from "axios";
import {
  setCountries,
  setCountriesWithActivities,
  setCountry,
  setCountryDetail,
  setOrder,
} from "../countriesSlice";

export const getCountries = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries`)
      .then((response) => {
        dispatch(setCountries(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getCountryDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        dispatch(setCountryDetail(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getCountry = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((response) => {
        dispatch(setCountry(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getOrder = (order) => {
  console.log("reduOrden", order);
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/orderings/?order=${order}`)
      .then((response) => {
        dispatch(setOrder(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getContinent = (continent) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/continents/?continent=${continent}`)
      .then((response) => {
        dispatch(setOrder(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getCountriesWithActivities = (activity) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/activity?activity=${activity}`)
      .then((response) => {
        dispatch(setCountriesWithActivities(response.data));
      })
      .catch((error) => console.log(error));
  };
};
