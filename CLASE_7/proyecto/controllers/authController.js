// authController.js
const bcrypt = require('bcrypt');
const pool = require('../index.js');  // Asegúrate de que esto esté importando correctamente

async function login(req, res) {
    const { username, password } = req.body;

    try {
        // Busca al usuario en la base de datos
        const result = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
        
        if (result.rows.length > 0) {
            const user = result.rows[0];
            // Compara la contraseña ingresada con la contraseña encriptada
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.userId = user.id; // Guarda el ID del usuario en la sesión
                return res.redirect('/consultas');  // Redirige a la página de la tabla
            }
        }
        // Si las credenciales son incorrectas
        res.status(401).send('Credenciales incorrectas');
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send('Error en el servidor');
    }
}

module.exports = { login };
