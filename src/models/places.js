const mongose = require("mongoose");

const placesSchema = new mongose.Schema({
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