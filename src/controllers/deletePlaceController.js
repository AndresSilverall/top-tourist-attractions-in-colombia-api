const express = require("express");
const Places = require("../models/places");


const app = express()


exports.deletePlace = async (req, res) => {

    try {
        const getplaceId = await Places.findById(req.params.id)
        getplaceId.deleteOne()
        res.json({
            "Message": "Place deleted!"
        })
    } catch (err) {
        res.status(404).json(
            {
                "Message": "Place not found"
            }
        )
    }

}