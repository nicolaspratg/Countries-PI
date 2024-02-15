import { GET_ALL_COUNTRIES } from "./actions";

const initialState = {
  allCountries: [],
  myCountries: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      console.log("Payload at Reducer:", payload);
      const aux = payload; // hold payload in aux
      return {
        ...state,
        allCountries: aux, // update countries with payload
        myCountries: [...aux], // copy of payload
      };
    default:
      return state; // default return state unchanged
  }
};
export default rootReducer;
