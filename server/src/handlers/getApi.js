const getApiController = require("../controllers/getters/getApi"); // get the data from this fn
const { Country } = require("../db");

const getApiHandler = async () => {
  try {
    const countries = await getApiController();                   // data (in this case all our countries from the db.json) assigned to countries variable.

    for (const country of countries) {                           // iterate countries
      await Country.create({                                     // for every country from countries, creates a new
        id: country.cca3,                                        // country with the info specified below.
        name: country.name.common,                               // these will be stored in our postgres db.
        flagImage: country.flags.png,
        continent: country.region,
        capital: country.capital?.[0] ?? "Unknown Capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      });
    }

    console.log("Countries inserted successfully");              // Once the loop is done, log success.
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getApiHandler;                                  // exported for index.js to use
