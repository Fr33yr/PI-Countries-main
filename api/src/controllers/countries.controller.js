const { Country } = require('./db.js');
const axios = require('axios')

const getCountries = async (req, res) => {
    axios.get('https://restcountries.com/v3/all')
        .then(function (res) {
            //const {name, cca3, flags, continents, subregion, area, population} = res
            res.map((e) =>(
                Country.create({
                    id: e.cca3,
                    name: e.name.common,
                    images: e.flags,
                    continents: e.continents,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population
                })
            ))
        })
        .catch(function (error) {
        console.log(error)
        })
        
    try {
        const countries = await Country.findAll()
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