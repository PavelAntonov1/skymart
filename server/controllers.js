const jwt = require("jwt");
const bcrypt = require("bcrypt");

const saltRounds = 10;

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.error("Error in login: " + error);
    return res.sendStatus(500);
  }
};
