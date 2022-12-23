const { Activity, Country } = require('../../db.js');
const {Op} = require('sequelize')

// create activities
const createActivity = async (req, res) => {
    const { name, dificulty, duration, season, countriesIds } = req.body
    
    try {
        if(!name || !dificulty || !duration || !season){
            throw new Error('Este campo es requerido')
        }

        const activity = await Activity.create({
            name: name.toLowerCase(),
            dificulty,
            duration,
            season
        })
        
        const options = []

        for (let i = 0; i < countriesIds.length; i++) {
            options.push({
                id: countriesIds[i]
            })
        }

        const countries = await Country.findAll({
            where: {
                [Op.or]: options
            },
            include: Activity
        })

        countries.map((c) =>(
            c.addActivity(activity)
        ))
            
        res.status(201).json({message: "Todo salio bien"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
module.exports = {createActivity}