
const PORT = process.env.PORT || 3000;
// Import Express, CORS, and Morgan
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
//
const db = require("./db/connection")

// Instantiate Express
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
db.on("error", console.error.bind(console, "MongoDB connection error: "))
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))