const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Crear la aplicación Express
const app = express();

// Configurar el pool para conectar con PostgreSQL
const pool = new Pool({
    user: 'postgres',          // Usuario de PostgreSQL
    host: 'localhost',           // Servidor de la base de datos
    database: 'Consultas',// Nombre de tu base de datos
    password: 'CilsaGroup',   // Contraseña de PostgreSQL
    port: 5432,                  // Puerto por defecto de PostgreSQL
});

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join('../proyecto')));

// Ruta para la página principal o cualquier HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/home.html')); // Cambia a la ruta de tu HTML
});

// Ruta POST para recibir los datos del formulario
app.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // Insertar los datos en la tabla de PostgreSQL
        const result = await pool.query(
            'INSERT INTO contact_form (name, email, subject, message) VALUES ($1, $2, $3, $4)',
            [name, email, subject, message]
        );
        res.send('Formulario enviado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al guardar los datos en la base de datos');
    }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
