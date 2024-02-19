import axios from "axios";
// action.type
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";

const endpointURL = "http://localhost:3001/";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpointURL + "countries");

      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log("Action - Error:", error.response);
      alert(error.message);
    }
  };
};

export const searchCountry = (country) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        endpointURL + `countries/name?query=${country}`
      );
      dispatch({
        type: SEARCH_COUNTRY,
        payload: data,
      });
    } catch (error) {
      console.log("Action - Error:", error.response);
      alert(error.message);
    }
  };
};
