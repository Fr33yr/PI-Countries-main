const { Activity } = require('../db.js');

const createActivity = async (req, res) => {
    const { name, dificulty, duration, season } = req.body
    try {
        if(!name || !dificulty || !duration || !season){
            throw new Error('Este campo es requerido')
        }
        const activity = await Activity.findOne({
            where:{
                name
            }
        })
        if(activity){
            throw new Error('Ya existe una actividad con ese nombre')
        }
        await Activity.create({
            name: name.toLowerCase(),
            dificulty,
            duration,
            season
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = { createActivity }