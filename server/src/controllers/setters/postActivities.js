const { Activity, Country } = require("../../db");

module.exports.postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;       // extracts necessary info to create an activity from req.body
    const newActivity = await Activity.create({                               // creates a new activity in the Activity table using sql .create
      name,
      difficulty,
      duration,
      season,
      countries
    });
    console.log(newActivity);
    if (countries && countries.length > 0) {                                  // if there are countries assoicated with this activity
      const associatedCountries = await Country.findAll({                     // ??
        where: {
          id: countries,
        },
      });

      await newActivity.setCountries(associatedCountries);                    // ??
    }

    res.status(201).json(newActivity);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "Error creating the tourist activity" });
  }
};
