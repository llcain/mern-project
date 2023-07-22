// acquire dotenv config
require('dotenv').config();

// Creating an express server
const express = require('express');

// express app
const app = express();

// routes 
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
});

// listen for request
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
});

