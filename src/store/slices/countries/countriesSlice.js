import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countries", //nombre del estado

  initialState: {
    countries: [],

    countryDetail: {},
  }, //stado

  reducers: {
    //  actions
    setCountries: (state, action) => {
      state.countries = action.payload;
    },

    setCountryDetail: (state, action) => {
      state.countryDetail = action.payload;
    },

    setCountry: (state, action) => {
      state.countries = action.payload;
    },

    setOrder: (state, action) => {
      state.countries = action.payload;
    },

    setContinent: (state, action) => {
      state.countries = action.payload;
    },

    setCountriesWithActivities: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const {
  setCountries,
  setCountryDetail,
  setCountry,
  setOrder,
  setContinent,
  setCountriesWithActivities,
} = countrySlice.actions;

export default countrySlice.reducer;
