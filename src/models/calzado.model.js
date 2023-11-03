const mongoose = require('mongoose');

const calzadoSchema = mongoose.Schema({
    precio: {
        type: Number,
        required: true,
    },
    talla: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    inventario: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        required: false,
        default: new Date()
    },
    updated_at: {
        type: Date,
        required: false,
        default: null
    },
    deleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    deleted_at: {
        type: Date,
        required: false,
        default: null,
    },
});

module.exports = mongoose.model('Calzado', calzadoSchema);