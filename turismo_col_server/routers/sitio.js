const express = require("express");
const SitioController = require("../controllers/sitioController");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-sitio", /*[md_auth.ensureAuth],*/SitioController.createSitio);
api.get("/get-sitio", SitioController.getSitio);
api.delete("/delete-sitio/:id", /*[md_auth.ensureAuth],*/ SitioController.deleteSitio);
api.put("/update-sitio/:id", /*[md_auth.ensureAuth],*/ SitioController.updateSitio);

module.exports = api;