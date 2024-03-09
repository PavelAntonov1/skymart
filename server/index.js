const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes"));

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server successfully running on port " + PORT);
  }

  if (error) {
    console.error("Server error: " + error);
  }
});
