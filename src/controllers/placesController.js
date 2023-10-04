const express = require("express");
const Places = require("../models/places");
const { get } = require("mongoose");


const app = express()


exports.getAllData = async (req, res) => {
    try {
        const places = await Places.find()
        res.json(places)

    } catch (err) {
        res.status(500).json({ 
        		"message": 'An error occurred while  the place!' 
      	})
    }
}


exports.getPlaceByID = async (req, res) => {
    try {
        const getPlace = await Places.findById(req.params.id)

				if (!getPlace) {
						res.status(404).json({
							"message": "Place not found!"
						})
				} else {
					await res.json(getPlace).status(200)
				}
      
    } catch (err) {
        res.status(404).json({
            "message": "An error occurred while getting the place!"
        })
    }  
}


exports.addNewPlace = async (req, res) => {

    const insertPlace = Places.create(req.body)
    res.json(insertPlace)

}


exports.updatePLace = async (req, res) => {

	const getPlaceById = res.params.id;

		try {
				if (!getPlaceById) {
						res.status(404).json({
						"message": "Error, place not found!"
					})
				} else {
						const data = await Places.findOneAndUpdate(getPlaceById, {
						"name": req.body.name,
						"city": req.body.city,
						"location": req.body.location,
						"score": req.body.score
					})
				}
		} catch(err) {
				res.json({
						"message": "An error occurred while getting the place!"
			})
	}
}


exports.deletePlace = async (req, res) => {

		try {
        const getplaceId = await Places.findById(req.params.id)

				if (!getplaceId) {
						return res.status(404).josn({
							"message": "Error, place not found!"
						})

				} else {
					await getplaceId.deleteOne()

					res.status(200).json({
						"message": "Place deleted successfully!"
					})
				}
        
    } catch (err) {
        res.status(404).json({
              "message": "An error occurred while deleting the place!"
        })
    }
}