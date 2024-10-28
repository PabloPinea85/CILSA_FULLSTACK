// setupAdminUser.js
const bcrypt = require('bcrypt');
const pool = require('./index'); // Importa la conexión a la base de datos

async function createAdminUser() {
    const username = 'admin';
    const password = 'admin';

    try {
        // Encripta la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserta el usuario en la tabla "usuarios"
        await pool.query(
            'INSERT INTO usuarios (username, password) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING',
            [username, hashedPassword]
        );

        console.log('Usuario admin creado con éxito.');
    } catch (error) {
        console.error('Error al crear usuario admin:', error);
    }
}

// Llama a la función para ejecutar la creación
createAdminUser();
