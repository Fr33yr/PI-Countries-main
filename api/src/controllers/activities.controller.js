const { Activity } = require('../db.js');

const createActivity = async (req, res) => {
    const { name, dificulty, duration, season } = req.body
    try {
        if(!name || !dificulty){
            throw new Error('Este campo es requerido')
        }else if(!duration || !season){
            throw new Error('Este campo es requerido')
        }
        const newActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { createActivity }