const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");

const getCapitalByName = async (req, res) => {
  try {
    const { capitalName } = req.params;                 // extract capital name from params
    console.log("Searching for country:", capitalName);
    const capital = await Country.findAll({
      where: {
        capital: {
          [Op.iLike]: `%${capitalName}%`,               // find all capitals like the one received from params
        },
      },
      include: {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    });
    if (capital.length > 0) {                           // if found at least 1, return as json
      res.json(capital);
    } else {
      res.status(404).json({ message: "Country Capital not found" });
    }
  } catch (error) {
    console.error("Error fetching country with that Capital:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCapitalByName;
