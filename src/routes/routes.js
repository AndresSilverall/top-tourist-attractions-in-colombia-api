const express = require("express");
const dataConroller = require("../controllers/touristsplacescontroller");
const router = express.Router();


// llamar al controlador que se encarga de mostrar todos los lugares.
router.get("/", dataConroller.showAllTouristPLaces)
router.get("/:id", dataConroller.getPLaceByid)
router.post("/", dataConroller.addplace)

module.exports = router;