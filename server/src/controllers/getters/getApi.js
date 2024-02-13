const axios = require("axios");

const getApiController = async () => {
  const { data } = await axios("http://localhost:5000/countries");
  return data;
};
// fetch data from our local API and then returns it.
// Data will be used in the getApiHandler

module.exports = getApiController;
