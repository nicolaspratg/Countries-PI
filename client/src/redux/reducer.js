import { GET_ALL_COUNTRIES, SEARCH_COUNTRY } from "./actions";

const initialState = {
  allCountries: [],
  searchResults: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      // console.log("Payload at Reducer:", payload);
      return {
        ...state,
        allCountries: payload,
      };
    case SEARCH_COUNTRY:
      const searchedCountries = payload; // Assuming payload is the searched country object

      return {
        ...state,
        searchResults: searchedCountries,
      };

    default:
      return state; // default return state unchanged
  }
};
export default rootReducer;
