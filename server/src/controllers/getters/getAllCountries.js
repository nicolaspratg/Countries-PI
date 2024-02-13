const { Country, Activity } = require("../../db");

module.exports.getAllCountries = async (req, res) => {
  try {
    console.log("Controller function getAllCountries invoked");   // debug purposes

    const countries = await Country.findAll({                     // finds all and returns an array of obj
      include: Activity,                                          // includes Activities of countries
    });
    res.json(countries);
  } catch (error) {
    console.error("error fetching countries:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
