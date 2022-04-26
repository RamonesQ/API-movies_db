const Person = require("../models/Person.js")
const { Op } = require("sequelize")


const PersonController = {
  // forma correta, mais comum do mercardo
  // async listar(req, res){
  //   const{termo} = req.query;
  //   const filter = {};
  //   if(termo){
  //     Object.assign(filter,{
  //       where: {
  //         person_name:{[Op.substring]: termo},
  //       }
  //     });
  //   const person = await Person.findAll(filter);
  //   res.json(person);
  // },
  async listar(req, res) {
    const { termo, page=1 } = req.query;
    const limit = 10;
    const offset = limit*(parseInt(page)-1);

    let filter = {
      limit,
      offset,
      attributes:["person_name"]
  };

    if (termo) {
      Object.assign(filter,{
        where: {
          //person_name: { [Op.like]: `%${termo}%` },
          person_name: { [Op.substring]: termo },
        },
      })
    }

    const Persons = await Person.findAll(filter);

    res.json(Persons);
  },
  //   async listar(req, res){
  // persom?nome=vinny
  // req.query

  // params/person/:id
  // req.params

  // corpo da requisição 
  // req.body
  //     const person = await Person.findAll( {limit:10,offset:40 });
  //     res.json(person);
  // },
  async atualizar(req, res) {
    const { id } = req.params;
    const { nome } = req.body;

    await Person.update({
      person_name: nome,
    },
      {
        where: {
          person_id: id,
        },
      }
    );
    const PersonAtualizado = await Person.findByPk(id);
    return res.json(PersonAtualizado);
  }, async deletar(req, res) {
    const { id } = req.params;
    await Person.destroy({
      where: {
        person_id: id,
      },
    });
    res.json("Pessoa deletada")
  },
  async cadastrarPerson(req, res) {
    const { person_id, person_name } = req.body;
    const newPerson = await Person.create({
      person_id,
      person_name,
    });
    res.json(newPerson);
  },
};
module.exports = PersonController;




//  Documentar uma função
//  /**
//  * @param {number} numA numero calculado
//  * @param {number} numB numero calculado
//  */
// function calcular(numA, numB) {}

// calcular();
