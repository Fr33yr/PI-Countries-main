const { Router } = require('express');
const { getCountries, getCountry, addActivity } = require('../controllers/countries.controller')
const { createActivity, getAllActivities } = require('../controllers/activities.controller')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Countries routes
router.get('/countries', getCountries)
//router.put('/countries', addActivity)
router.get('/countries/:id', getCountry)
// Activities routes
router.post('/activities', createActivity)
router.get('/activities', getAllActivities)

module.exports = router;
