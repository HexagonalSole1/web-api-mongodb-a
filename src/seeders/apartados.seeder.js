const mongoose = require('mongoose');
const Apartado = require('../models/apartado.model');
require('dotenv').config();
require('../configs/db.config');


const apartados = [
    {
      "fecha": "2023-11-02T14:00:00.000Z",
      "clienteId": "cliente1",
      "vigencia": "2023-11-05T14:00:00.000Z"
    },
    {
      "fecha": "2023-11-03T10:30:00.000Z",
      "clienteId": "cliente2",
      "vigencia": "2023-11-06T10:30:00.000Z"
    },
    {
      "fecha": "2023-11-04T16:45:00.000Z",
      "clienteId": "cliente3",
      "vigencia": "2023-11-07T16:45:00.000Z"
    },
    {
      "fecha": "2023-11-05T12:15:00.000Z",
      "clienteId": "cliente4",
      "vigencia": "2023-11-08T12:15:00.000Z"
    },
    {
      "fecha": "2023-11-06T08:30:00.000Z",
      "clienteId": "cliente5",
      "vigencia": "2023-11-09T08:30:00.000Z"
    },
    {
      "fecha": "2023-11-07T17:20:00.000Z",
      "clienteId": "cliente6",
      "vigencia": "2023-11-10T17:20:00.000Z"
    },
    {
      "fecha": "2023-11-08T09:45:00.000Z",
      "clienteId": "cliente7",
      "vigencia": "2023-11-11T09:45:00.000Z"
    },
    {
      "fecha": "2023-11-09T15:30:00.000Z",
      "clienteId": "cliente8",
      "vigencia": "2023-11-12T15:30:00.000Z"
    },
    {
      "fecha": "2023-11-10T11:10:00.000Z",
      "clienteId": "cliente9",
      "vigencia": "2023-11-13T11:10:00.000Z"
    },
    {
      "fecha": "2023-11-11T14:45:00.000Z",
      "clienteId": "cliente10",
      "vigencia": "2023-11-14T14:45:00.000Z"
    }
  ]
  ;

Apartado.insertMany(apartados)
    .then(() => {
        console.log('apartados creados exitosamente');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error(error);
        mongoose.connection.close();
    });
