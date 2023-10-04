const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Places = require("../models/places");


const app = express()


const places = [

    {
        "id": 1,
        "name": "Castillo san felipe",
        "city": "Cartagena",
        "location": "Bolivar" 
    },
    {
        "id": 2,
        "name": "Aleta de tiburon",
        "city": "Barranquilla",
        "location": "Atlantico"
    },
    {
        "id": 3,
        "mame": "Plaz bolivar",
        "city": "Bogota",
        "location": "Cundinamarca"
    }
]


exports.getAllData = async (req, res) => {
    try {
        const places = await Places.find()
        res.json(places)
    }

    catch (err) {
        res.status(500).json(
            { 
                message: 'Error al obtener los lugares' 
            });
    }
}

exports.showAllTouristPLaces = (req, res) => {
    res.json(places)
}

exports.getPLaceByid = (req, res) => {
    const getPlace = places.find(i => i.id == req.params.id)
    if (!getPlace) {
        res.status(400).json(
            {
                "Message": "Place not found!"
            }
        )
    } else {
        res.json(getPlace)
    }
}


exports.addplace = (req, res) => {
    const data = req.body;
    places.push(data)
    res.json(places)
}