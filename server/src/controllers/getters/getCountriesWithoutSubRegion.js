const { Op } = require("sequelize");
const { Country } = require("../../db");

const getCountriesWithoutSubregion = async (req, res) => {
  try {
    const countriesWithoutSubregion = await Country.findAll({
      where: {
        subregion: {
          [Op.or]: [null, ""], // Query countries where subregion is null or an empty string
        },
      },
    });
    console.log(countriesWithoutSubregion);

    res.json(countriesWithoutSubregion);
  } catch (error) {
    console.error("Error fetching countries without subregion:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getCountriesWithoutSubregion;
