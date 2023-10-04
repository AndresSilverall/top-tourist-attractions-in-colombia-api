const express = require("express");
const Places = require("../models/places");


const app = express()


exports.getAllData = async (req, res) => {
    try {
        const places = await Places.find()
        res.json(places)

    } catch (err) {
        res.status(500).json(
            { 
                message: 'Error al obtener los lugares' 
      	});
    }
}


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


exports.addNewPlace = async (req, res) => {

    const insertPlace = Places.create(req.body)
    res.json(insertPlace)

}


exports.updatePLace = async (req, res) => {

	const getPlaceById = re.params.id;
	const data = Places.updateOne(getPlaceById)


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

					res.status(200).josn({
						"message": "Place deleted successfully!"
					})
				}
        
    } catch (err) {
        res.status(404).json({
              "message": "An error occurred while deleting the place"
        })
    }
}