const express = require("express");
const { showAllTouristPLaces } = require("../controllers/touristsplacescontroller");
const router = express.Router();


// llamar al controlador que se encarga de mostrar todos los lugares.
router.get("/", showAllTouristPLaces)

module.exports = router;