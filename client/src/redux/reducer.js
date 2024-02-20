import {
  FILTER_BY_CONTINENT,
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY,
} from "./actions";

const initialState = {
  allCountries: [],
  allCountriesBackup: [],
  filteredResults: [],
  searchResults: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log("Current state:", state);

  switch (type) {
    case GET_ALL_COUNTRIES:
      // console.log("Payload at Reducer:", payload);
      return {
        ...state,
        allCountries: payload,
        allCountriesBackup: payload,
      };
    case SEARCH_COUNTRY:
      const searchedCountries = payload; // Assuming payload is the searched country object

      return {
        ...state,
        searchResults: searchedCountries,
      };
    case FILTER_BY_CONTINENT:
      if (payload === "All") {
        return {
          ...state,
          filteredResults: [], // Show all countries
          searchResults: [],
        };
      }
      // Filter allCountries and store the filtered results in a new variable
      const filteredCountries = state.allCountries.filter(
        (country) => country.continent === payload
      );
      console.log(payload);
      return {
        ...state,
        filteredResults: filteredCountries, // Show filtered countries
      };
    default:
      return state; // default return state unchanged
  }
};
export default rootReducer;
