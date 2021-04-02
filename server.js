
const PORT = process.env.PORT || 3000;
// Import Express, CORS, and Morgan
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// Instantiate Express
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))