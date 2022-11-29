const { Country, Activity } = require('../db.js');
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

const getCountries = async (req, res) => {
    const { name } = req.query
    try {
        if (!name) {
            const countries = await Country.findAll({
                include: Activity
            })
            res.json(countries)
        } else {
            const filteredCountries = await Country.findAll({
                where: {
                    name:{[Op.like]: `%${name}%`}
                },
                include: Activity
            })
            if (filteredCountries.length <= 0) {
                throw new Error('No hay paises con ese nombre')
            }
            res.json(filteredCountries)
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
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
        if(!country) throw new Error('No se encontro un pais con ese id')
        res.json(country)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const addActivity = async (req, res) => {
    const { activityId, countryId } = req.body
    try {
        const newActivity = await Activity.findByPk(activityId)
        const country = await Country.findByPk(countryId)
        country.addActivity(newActivity)
        
        res.status(201).send({message: "Todo ok"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { getCountries, getCountry, addActivity }