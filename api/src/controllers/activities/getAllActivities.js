const { Activity, Country } = require('../../db.js');
const {Op} = require('sequelize')

// get all activities
const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: Country
        })
        if(activities){
            res.json(activities)
        }else{
            throw new Error('No activities found')
        }
    } catch (error) {
        res.json({message: error.message})
    }
}
module.exports = {getAllActivities}