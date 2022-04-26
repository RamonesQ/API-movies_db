const Movie = require("../models/Movie");
const {Op} = require("sequelize")

const MovieController = {
    async listar(req, res){
        const movie = await Movie.findAll( {limit:10});
        res.json(movie);
    },
    async listarMelhores(req,res){
        const movie = await Movie.findAll({
            where:{
                vote_average:{
                    [Op.gte]:9
                }
            }
        });
        res.json(movie)
    },
    async listarPiores(req,res){
        const movie = await Movie.findAll({
            where:{
                vote_average:{
                    [Op.between]:[0.01, 3 ]
                }
            }
        });
        res.json(movie)
    },
}

module.exports = MovieController;