const express = require("express");
const placesController = require("../controllers/placesController");


// manejador de rutas
const router = express.Router();


// llamar al controlador que se encarga de mostrar todos los lugares.
router.get("/", placesController.getAllData)
router.get("/:id", placesController.getPlaceByID)
router.post("/", placesController.addNewPlace)
router.put("/:id", placesController.updatePLace)
router.delete("/:id", placesController.deletePlace)


module.exports = router;