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
        const getPlace = await Places.findById({_id:req.params.id})
				await res.json(getPlace).status(200)

    } catch (err) {
        res.status(404).json({
            "message": "An error occurred while getting the place!" 
        })
    }  
}


exports.addNewPlace = async (req, res) => {
		try {
			const addPlace = await Places.create(req.body)
			await res.status(201).json({
				"message": "New place added!"
			})

		} catch (err) {
			res.status(404).json({
					"message": "An error occurred while getting the place!" 
			})
	}  
}


exports.updatePLace = async (req, res) => {

		try {

			const getPlaceById = req.params.id;
			const data = await Places.findByIdAndUpdate({ _id: getPlaceById }, {
				name: req.body.name,
				location: req.body.location,
				city: req.body.city,
				score: req.body.score
			}, {lean:true})

			res.status(200).json({
				"message": "Place updated successfully!"
			})

		} catch (err) {
					res.status(404).json({
						"message": "An error occurred while updating the place!"
					})
		}
	}


exports.deletePlace = async (req, res) => {

		try {
        const getplaceId = await Places.findById(req.params.id)

				if (!getplaceId) {
						return res.status(404).json({
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