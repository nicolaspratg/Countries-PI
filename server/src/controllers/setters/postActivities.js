const { Activity, Country } = require("../../db");

module.exports.postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countriesId } = req.body; // extracts necessary info to create an activity from req.body
    const newActivity = await Activity.create({
      // creates a new activity in the Activity table using sql .create
      name,
      difficulty,
      duration,
      season,
      countries: countriesId,
    });
    let countriesFound = [];

    for (const countryId of countriesId) {
      console.log("country Name", countryId);
      const countryFound = await Country.findOne({
        where: { id: countryId },
      });
      countryFound && countriesFound.push(countryFound);
    }
    console.log("countries found", countriesFound);

    await newActivity.addCountry(countriesFound);

    const ActivityBd = await Activity.findOne({
      where: {
        name: newActivity.name,
      },
      include: {
        model: Country,
        as: "countries",
        attributes: ["name"],
        through: {
          attributes: [],
        },
        order: [["ASC"]],
      },
    });

    res.status(201).json([ActivityBd]);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "Error creating the tourist activity" });
  }
};
