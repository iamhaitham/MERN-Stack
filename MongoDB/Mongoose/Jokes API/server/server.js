const express = require("express");
const app = express();
const port = 8000;

const mongoose = require('mongoose');

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );