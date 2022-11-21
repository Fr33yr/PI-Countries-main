const { Router } = require('express');
const { getCountries, getCountry } = require('../controllers/countries.controller')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Countries routes
router.get('/countries', getCountries)
router.get('/countries/:id', getCountry)
// Activities routes

module.exports = router;
