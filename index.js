const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/routes");


const app = express()

// middleware para analizar las solicitudes en forma JSON
app.use(bodyParser.json())

app.use("/places", router)

app.get("/", (req, res) => {
    res.json({
        "prgrammer": "andres"
    })
})



const PORT = process.env.PORT || 3000;


//server
app.listen(PORT, () => {
    console.log(`Server listening on port: http://127.0.0.1:${PORT}/`);
})
