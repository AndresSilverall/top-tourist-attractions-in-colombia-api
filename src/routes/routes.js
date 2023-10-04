const express = require("express");
const dataConroller = require("../controllers/touristsplacescontroller");
const getPLaceController = require("../controllers/getPlaceController")
const router = express.Router();


// llamar al controlador que se encarga de mostrar todos los lugares.
router.get("/", dataConroller.getAllData)
router.get("/:id", getPLaceController.getPlaceByID)


module.exports = router;