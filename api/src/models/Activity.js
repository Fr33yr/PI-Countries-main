const { DataTypes, Sequelize, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dificulty: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: { 
            type: DataTypes.ARRAY(Sequelize.STRING),
            allowNull: false
        },
    },
    {timestamps: false});
}