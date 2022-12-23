const { Country, Activity } = require('../../db.js');
const axios = require('axios');
const { Op } = require('sequelize');

const getApiData = () => {
    axios.get('https://restcountries.com/v3/all')
        .then(res => Country.bulkCreate(res.data.map(e =>
            ({
                id: e.cca3,
                name: e.name.common.toLowerCase(),
                images: e.flags,
                continent: e.continents[0].toLowerCase(),
                capital: e.capital !== null ? e.capital : "No hay capital",
                subregion: e.subregion,
                area: e.area,
                population: e.population
            }))
        ))
        .catch(err => console.log(err))
}
getApiData()

module.exports = {getApiData}