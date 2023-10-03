const express = require("express");
const bodyParser = require("body-parser");


const app = express()


const places = [
    {
        "name": "Castillo san felipe",
        "city": "Cartagena",
        "location": "Bolivar" 
    },
    {
        "name": "Aleta de tiburon",
        "city": "Barranquilla",
        "location": "Atlantico"
    },
    {
        "mame": "Plaz bolivar",
        "city": "Bogota",
        "location": "Cundinamarca"
    }
]


exports.showAllTouristPLaces = (req, res) => {
    res.json(places)
}