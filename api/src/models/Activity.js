const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.STRING },
        dificulty: { type: DataTypes.INTEGER },
        duration: { type: DataTypes.INTEGER },
        season: { type: DataTypes.ARRAY(Sequelize.STRING) }
    });
}