require('dotenv').config();
require('./src/configs/db.config');

const express = require('express');
const app = express();
const usuariosRouter = require('./src/routes/usuarios.route');
const calzadosRouter = require('./src/routes/calzados.route');
const apartadosRouter = require('./src/routes/apartados.route');
const authRouter = require('./src/routes/auth.route');
const uploadsRouter = require('./src/routes/uploads.route');

app.use(express.json());
app.use('/usuarios', usuariosRouter);
app.use('/calzados',calzadosRouter);
app.use('/apartados',apartadosRouter)
app.use('/uploads', uploadsRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("API escuchando en el puerto 3002");

});