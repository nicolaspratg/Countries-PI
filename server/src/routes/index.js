const { Router } = require("express");
const router = Router();

const { getAllCountries } = require("../controllers/getters/getAllCountries");
const { getCountryById } = require("../controllers/getters/getCountryById");
const getCountryByName = require("../controllers/getters/getCountryByName");
const getCapitalByName = require("../controllers/getters/getCapitalByName");
const getContinentCountries = require("../controllers/getters/getContinentCountries");
const { getActivities } = require("../controllers/getters/getActivities");
const { postActivities } = require("../controllers/setters/postActivities");

router.get("/countries", getAllCountries);
router.get("/countries/id/:idCountry", getCountryById);
router.get("/countries/name/:name", getCountryByName);
router.get("/countries/capital/:capitalName", getCapitalByName);
router.get("/countries/continent/:continentName", getContinentCountries);
router.post("/activities", postActivities);
router.get("/activities", getActivities);

module.exports = router;
