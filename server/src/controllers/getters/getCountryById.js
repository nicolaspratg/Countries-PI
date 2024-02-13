const { Country, Activity } = require("../../db");

module.exports.getCountryById = async (req, res) => {
  try {
    // Extract the idCountry parameter from the request URL
    const { idCountry } = req.params;

    // Query the database to find the country with the specified ID and include associated activities
    const country = await Country.findOne({
      where: { id: idCountry },
      include: [{ model: Activity, attributes: ["name"] }], // Include associated activities
    });

    // If country is found, send its details along with associated activities
    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    console.error("Error fetching country details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
