const express = require("express");
const Places = require("../models/places");


const app = express()


exports.addNewPlace = async (req, res) => {

    const insertPlace = Places.create(req.body)
    res.json(insertPlace)

}