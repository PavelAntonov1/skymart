const routes = require("express").Router();

const { login, verifyToken, logout } = require("./controllers");

// routes

routes.post("/login", login);
routes.get("/logout", logout);

module.exports = routes;
