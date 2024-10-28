// authRoutes.js
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Ruta para el inicio de sesión
router.post('/login', login);  // Asegúrate de que esta línea esté presente

module.exports = router;
