const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: { type: DataTypes.ARRAY(Sequelize.STRING) },
    continents: { type: DataTypes.ARRAY(Sequelize.STRING) },
    subregion: { type: DataTypes.STRING },
    area: { type: DataTypes.INTEGER },
    population: { type: DataTypes.INTEGER }
  });
};
