const express = require("express");
const dataConroller = require("../controllers/touristsplacescontroller");
const getPLaceController = require("../controllers/getPlaceController")
const addPlaceControler = require("../controllers/addPlaceControler")
const deletePlace = require("../controllers/deletePlaceController")
const router = express.Router();


// llamar al controlador que se encarga de mostrar todos los lugares.
router.get("/", dataConroller.getAllData)
router.get("/:id", getPLaceController.getPlaceByID)
router.post("/", addPlaceControler.addNewPlace)
router.delete("/:id", deletePlace.deletePlace)

module.exports = router;