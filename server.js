const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port:${process.env.PORT}`);
});

mongoose.connect(process.env.DB).then(() => {
  console.log("Database connected");
});
