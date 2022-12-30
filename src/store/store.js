import { configureStore } from "@reduxjs/toolkit";
// reducers
import countries from "./slices/countries/countriesSlice";
import activities from "./slices/activities/activitiesSlice";

export default configureStore({
  reducer: {
    countries,
    activities,
  },
});
