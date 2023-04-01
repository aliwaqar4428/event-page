const express = require("express");
const app = express();

const eventRoute = require("./routes/eventRoute");

app.use(express.json());

app.use("/api/v1", eventRoute);

module.exports = app;
