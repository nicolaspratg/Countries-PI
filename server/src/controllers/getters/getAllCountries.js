const { Country, Activity } = require("../../db");

module.exports.getAllCountries = async (req, res) => {
  try {
    console.log("Controller function getAllCountries invoked");

    const countries = await Country.findAll({
      include: {
        model: Activity, // Specify the associated model
        as: "activities", // Use the alias specified in the association
      },
    });
    res.json(countries);
  } catch (error) {
    console.error("error fetching countries:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
