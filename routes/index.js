const express = require("express");
const GenderController = require("../controllers/gender.controller");
const MovieController = require("../controllers/movie.controller");
const PersonController = require("../controllers/person.controller");
const CompanyNameController = require("../controllers/company.name.controller")

const routes = express.Router();

routes.get("/gender", GenderController.listar);
routes.get("/person",PersonController.listar);
routes.put("/person/:id/atualizar",PersonController.atualizar);
routes.delete("/person/:id/deletar",PersonController.deletar);
routes.post("/person/criar",PersonController.cadastrarPerson);

routes.get("/movie", MovieController.listar);
routes.get("/movie/melhor", MovieController.listarMelhores);
routes.get("/movie/pior", MovieController.listarPiores);
routes.get("/companyname",CompanyNameController.listar);

module.exports = routes;
