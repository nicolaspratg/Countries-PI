const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");

const getContinentCountries = async (req, res) => {
  try {
    const { continentName } = req.params;                 // extract continent name from params
    console.log("Searching for country:", continentName);
    const continent = await Country.findAll({
      where: {
        continent: {
          [Op.iLike]: `%${continentName}%`,               // find all continents that are like the one received by params
        },
      },
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    if (continent.length > 0) {                           // if at least one is found, return as json
      res.json(continent);
    } else {
      res.status(404).json({ message: "Continent not found" });
    }
  } catch (error) {
    console.error("Error fetching continent countries:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

module.exports = getContinentCountries;
