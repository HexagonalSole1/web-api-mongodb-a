require('dotenv').config();
require('../configs/db.config');

const bcrypt = require('bcrypt');
const saltosBcrypt = parseInt(process.env.SALTOS_BCRYPT);
const Usuario = require('../models/usuario.model');
const mongoose = require('mongoose');

const usuarios = [
    { nombre: "nombre1", apellido: "apellido1", email: "email1@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol1" },
    { nombre: "nombre2", apellido: "apellido2", email: "email2@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol2" },
    { nombre: "nombre3", apellido: "apellido3", email: "email3@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol3" },
    { nombre: "nombre4", apellido: "apellido4", email: "email4@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol4" },
    { nombre: "nombre5", apellido: "apellido5", email: "email5@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol5" },
    { nombre: "nombre6", apellido: "apellido6", email: "email6@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol6" },
    { nombre: "nombre7", apellido: "apellido7", email: "email7@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol7" },
    { nombre: "nombre8", apellido: "apellido8", email: "email8@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol8" },
    { nombre: "nombre9", apellido: "apellido9", email: "email9@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol9" },
    { nombre: "nombre10", apellido: "apellido10", email: "email10@gmail.com", password: bcrypt.hashSync('1234', saltosBcrypt), rol: "rol10" },
];

Usuario.deleteMany({})
    .then(() => {
        return Usuario.insertMany(usuarios);
    })
    .then(() => {
        console.log("Usuarios creados");
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
        mongoose.connection.close();
    });
