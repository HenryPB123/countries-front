import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activities", //nombre del estado

  initialState: {
    activities: [],
    activitiesNames: [],
    idCountry: "",
  }, //stado

  reducers: {
    //  actions
    setActivity: (state, action) => {
      state.activities = action.payload;
    },
    delActivity: (state, action) => {
      state.activities = action.payload;
    },
    setActivitiesNames: (state, action) => {
      state.activitiesNames = action.payload;
    },
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    updateActivity: (state, action) => {
      state.activities = action.payload;
    },
    setIdCountry: (state, action) => {
      state.idCountry = action.payload;
    },
  },
});

export const {
  setActivity,
  delActivity,
  setActivitiesNames,
  setActivities,
  updateActivity,
  setIdCountry,
} = activitySlice.actions;

export default activitySlice.reducer;
