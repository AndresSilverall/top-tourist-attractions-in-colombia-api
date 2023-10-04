const express = require("express");
const Places = require("../models/places");


const app = express()

exports.getPlaceByID = async (req, res) => {
    try {
        const getPlace = await Places.findById(req.params.id)
        res.json(getPlace)

    } catch (err) {
        res.status(404).json({
            "Message": "Place not found!"
        })
    }  
}