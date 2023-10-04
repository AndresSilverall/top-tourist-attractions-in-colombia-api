const mongoose = require("mongoose");

const TopPlaces = new mongoose.Schema({
    name: {
			type: String,
    },

		city: String,

		location: String,

		score: {
			type: String, 
			enum: [1, 2, 3, 4, 5]
		}
});


module.exports = mongoose.model('PLaces', TopPlaces);