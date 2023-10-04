const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/routes");
const mongoose = require("mongoose");


// MongoDB connection
mongoose.connect("mongodb://localhost:27017/places", {
        useNewUrlParser: true, 
        
    }).then(() => {
        console.log("Database mongoDB connected!")

    }).catch((err) => {
        console.log(err)
    })

const db = mongoose.connection;


const app = express()

// middleware para analizar las solicitudes en forma JSON
app.use(bodyParser.json())

// routes
app.use("/places", router)

app.get("/", (req, res) => {
    res.json({
        "API REST": "Top Tourists places"
    })
})



const PORT = process.env.PORT || 3000;


//server
app.listen(PORT, () => {
    console.log(`Server listening on port: http://127.0.0.1:${PORT}/`);
})
