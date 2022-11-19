const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {type: DataTypes.STRING},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {type: DataTypes.STRING},
    continent: {type: DataTypes.STRING},
    subregion: {type: DataTypes.STRING},
    area: {type: DataTypes.INTEGER},
    population: {type: DataTypes.INTEGER}
  });
};
