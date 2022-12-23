const { Router } = require('express');
// activity controllers
const {createActivity} = require('../controllers/activities/createActivity')
const {getAllActivities} = require('../controllers/activities/getAllActivities')
// countries controllers
const {getCountry} = require('../controllers/contries/getCountry')
const {getCountries} = require('../controllers/contries/getCountries')
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
