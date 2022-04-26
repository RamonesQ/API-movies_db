const Company_name = require("../models/Company_name");
const { atualizar } = require("./person.controller");

const CompanyNameController= {
    async listar(req, res){
        const company_name = await Company_name.findAll( );
        res.json(company_name);
    },
};
  module.exports = CompanyNameController;