const { Country, Activity } = require('../../db.js');

// query by id
const getCountry = async (req, res) => {
    const { id } = req.params
    try {
        const country = await Country.findOne({
            where: {
                id
            },
            include: Activity
        })
        if(!country) throw new Error('No se encontro un pais con ese id')
        res.json(country)
    } catch (error) {
        if(error.message === 'No se encontro un pais con ese id') return res.status(404).json({ message: error.message })
        return res.json({ message: error.message })
    }
}

module.exports = {getCountry}