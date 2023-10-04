const express = require("express");
const Places = require("../models/places");


const app = express()


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

