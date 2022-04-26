const db = require("../database");
const { DataTypes } = require("sequelize");

const CompanyName = db.define("CompanyName", {
    company_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    company_name:{
        type: DataTypes.STRING,
    },
},{
    tableName: "production_company",
    timestamps: false,
}
);

module.exports = CompanyName;