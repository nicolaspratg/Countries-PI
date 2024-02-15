const { Op } = require("sequelize");                    // For complex db ops
const { Country, Activity } = require("../../db");

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.params;                        // extract country name from params
    console.log("Searching for country:", name);
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `${name}%`,                      // find all countries that are like the one received by params
        },
      },
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    if (countries.length > 0) {                         // if at least one was found, return as a json
      res.json(countries);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    console.error("Error fetching country details:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

module.exports = getCountryByName;
