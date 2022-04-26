const db = require("../database");
const { DataTypes } = require("sequelize");

const Movie = db.define("Movie",{
    movie_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING,
    },
    // budget:{
    //     type: DataTypes.INTEGER,
    // },
    // homepage:{
    //     type: DataTypes.STRING,
    // },
    overview:{
        type: DataTypes.STRING,
    },
    // popularity:{
    //     type: DataTypes.DECIMAL,
    // },
    release_date:{
        type: DataTypes.DATE,
    },
    vote_average:{
        type: DataTypes.DECIMAL
    },
},{
        tableName: 'movie',
        timestamps: false,
    });

module.exports = Movie;