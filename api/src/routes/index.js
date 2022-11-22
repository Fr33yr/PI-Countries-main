const { Router } = require('express');
const { getCountries, getCountry } = require('../controllers/countries.controller')
const { createActivity } = require('../controllers/activities.controller')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Countries routes
router.get('/countries', getCountries)
router.get('/countries/:id', getCountry)
// Activities routes
router.post('/activities', createActivity)

module.exports = router;
