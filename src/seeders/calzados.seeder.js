const mongoose = require('mongoose');
const Calzado = require('../models/calzado.model');
require('dotenv').config();
require('../configs/db.config');

const calzados = [
    {
      "precio": 49.99,
      "talla": "40",
      "modelo": "Deportivos Negros",
      "genero": "Hombre",
      "color": "Negro",
      "descripcion": "Zapatos deportivos negros para hombres",
      "tipo": "Deportivos",
      "inventario": 10
    },
    {
      "precio": 39.99,
      "talla": "38",
      "modelo": "Zapatos de Tacón Rojos",
      "genero": "Mujer",
      "color": "Rojo",
      "descripcion": "Elegantes zapatos de tacón rojos para mujeres",
      "tipo": "Tacón",
      "inventario": 8
    },
    {
      "precio": 29.99,
      "talla": "42",
      "modelo": "Zapatos Casuales Azules",
      "genero": "Hombre",
      "color": "Azul",
      "descripcion": "Zapatos casuales azules para hombres",
      "tipo": "Casuales",
      "inventario": 12
    },
    {
      "precio": 59.99,
      "talla": "37",
      "modelo": "Botas de Cuero Marrón",
      "genero": "Mujer",
      "color": "Marrón",
      "descripcion": "Botas de cuero marrón para mujeres",
      "tipo": "Botas",
      "inventario": 6
    },
    {
      "precio": 34.99,
      "talla": "41",
      "modelo": "Zapatos Deportivos Blancos",
      "genero": "Hombre",
      "color": "Blanco",
      "descripcion": "Zapatos deportivos blancos para hombres",
      "tipo": "Deportivos",
      "inventario": 14
    },
    {
      "precio": 44.99,
      "talla": "39",
      "modelo": "Zapatos de Fiesta Dorados",
      "genero": "Mujer",
      "color": "Dorado",
      "descripcion": "Elegantes zapatos de fiesta dorados para mujeres",
      "tipo": "Fiesta",
      "inventario": 7
    },
    {
      "precio": 69.99,
      "talla": "43",
      "modelo": "Botas de Montaña Grises",
      "genero": "Hombre",
      "color": "Gris",
      "descripcion": "Botas de montaña grises para hombres",
      "tipo": "Botas",
      "inventario": 9
    },
    {
      "precio": 59.99,
      "talla": "36",
      "modelo": "Zapatos de Tacón Negros",
      "genero": "Mujer",
      "color": "Negro",
      "descripcion": "Elegantes zapatos de tacón negros para mujeres",
      "tipo": "Tacón",
      "inventario": 11
    },
    {
      "precio": 49.99,
      "talla": "40",
      "modelo": "Zapatos Casuales Rojos",
      "genero": "Hombre",
      "color": "Rojo",
      "descripcion": "Zapatos casuales rojos para hombres",
      "tipo": "Casuales",
      "inventario": 5
    },
    {
      "precio": 54.99,
      "talla": "38",
      "modelo": "Zapatos Deportivos Rosados",
      "genero": "Mujer",
      "color": "Rosa",
      "descripcion": "Zapatos deportivos rosados para mujeres",
      "tipo": "Deportivos",
      "inventario": 13
    }
  ]
  ;

Calzado.insertMany(calzados)
    .then(() => {
        console.log('Calzados creados exitosamente');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error(error);
        mongoose.connection.close();
    });
