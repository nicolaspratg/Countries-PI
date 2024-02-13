const { Activity } = require("../../db");

module.exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();                  // returns an array containing all activities found
    res.status(200).json(activities);
  } catch {
    res.status(500).json({ error: error.message || "Error getting country" });
  }
};
