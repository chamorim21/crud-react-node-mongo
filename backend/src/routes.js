const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/users", UserController.index);
routes.post("/users", UserController.post);
routes.put("/users/:id", UserController.put);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
