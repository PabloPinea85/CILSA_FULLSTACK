const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const session = require('express-session');
const pool = new Pool({
    user: 'postgres',          // Usuario de PostgreSQL
    host: 'localhost',           // Servidor de la base de datos
    database: 'Consultas',// Nombre de tu base de datos
    password: 'CilsaGroup',   // Contraseña de PostgreSQL
    port: 5432,                  // Puerto por defecto de PostgreSQL
});

module.exports = pool;

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: true })); // Para manejar formularios
app.use(express.json()); // Para manejar JSON
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Define las rutas
app.use('/', authRoutes);

app.get('/consultas', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'consultas.html')); // Ajusta la ruta según la ubicación de tu archivo
});


// Ruta para obtener las consultas guardadas en la base de datos
app.get('/api/consultas', async (req, res) => {
    try {
        // Realizar la consulta a la base de datos
        const result = await pool.query('SELECT * FROM contact_form');

        // Enviar los datos como respuesta en formato JSON
        res.json(result.rows); // `rows` contiene todas las filas de la consulta
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error al obtener las consultas' });
    }
});


// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware 
app.use(express.static(path.join('../proyecto')));

// Ruta 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/home.html')); // Cambia a la ruta de tu HTML
});

// Ruta POST 
app.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
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


// Ruta consultas bd
app.get('/consultas', async (req, res) => {
    try {
        // Realizar la consulta a la base de datos
        const result = await pool.query('SELECT * FROM contact_form');

        // Enviar los datos como respuesta en formato JSON
        res.json(result.rows); // `rows` contiene todas las filas de la consulta
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error al obtener las consultas' });
    }
});

app.put('/consultas/:id/estado', async (req, res) => {
    const consultaId = req.params.id;
    const { estado } = req.body;  // obtiene el nuevo estado desde la solicitud
    try {
        const result = await pool.query(
            'UPDATE contact_form SET estado = $1 WHERE id = $2',
            [estado, consultaId]
        );
        
        if (result.rowCount > 0) {
            res.status(200).send('Estado actualizado correctamente');
        } else {
            res.status(404).send('Consulta no encontrada');
        }
    } catch (error) {
        console.error('Error al actualizar el estado:', error);
        res.status(500).send('Error al actualizar el estado');
    }
});





app.delete('/consultas/:id', async (req, res) => {
    const consultaId = req.params.id;
    console.log('ID recibido para eliminar:', consultaId); // Para ver si se recibe correctamente
    try {
        const result = await pool.query('DELETE FROM contact_form WHERE id = $1', [consultaId]);
        
        if (result.rowCount > 0) {
            res.status(200).send('Consulta eliminada');
        } else {
            res.status(404).send('Consulta no encontrada');
        }
    } catch (error) {
        console.error('Error al eliminar la consulta:', error);
        res.status(500).send('Error al eliminar la consulta');
    }
});


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

// ---------------------------------------------------------------

