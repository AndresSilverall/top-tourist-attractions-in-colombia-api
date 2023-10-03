const express = require("express");
const app = express()


app.get("/", (req, res) => {
    res.send("probando API")
})


const PORT = process.env.PORT || 3000;


//server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})