const { Country, Activity } = require('../db.js');
const axios = require('axios')

const getApiData = () => {
    axios.get('https://restcountries.com/v3/all')
        .then(res => res.data.map(e =>
            Country.create({
                id: e.cca3,
                name: e.name.common,
                images: e.flags,
                continents: e.continents,
                capital: e.capital !== null ? e.capital : "No hay capital",
                subregion: e.subregion,
                area: e.area,
                population: e.population
            })
        ))
        .catch(err => console.log(err))
}
getApiData()

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll({
            include: Activity
        })
        res.json(countries)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getCountry = async (req, res) => {
    const { id } = req.params
    try {
        const country = await Country.findOne({
            where: {
                id
            }
        })
        res.json(country)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = { getCountries, getCountry }