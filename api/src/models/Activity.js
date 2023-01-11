const { DataTypes } = require('sequelize')

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
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
            allowNull: false
        },
    },
    {timestamps: false});
}