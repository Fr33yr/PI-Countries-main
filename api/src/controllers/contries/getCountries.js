const { Country, Activity } = require('../../db.js');
const {getApiData} = require('./getApiData')
const { Op } = require('sequelize');

// get api data
getApiData()
// query by name
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
module.exports = {getCountries}