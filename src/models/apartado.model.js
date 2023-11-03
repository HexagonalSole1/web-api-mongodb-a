const mongoose = require('mongoose');

const apartadoSchema = mongoose.Schema({
    fecha: {
        type: String,
        required: true,
    },
    clienteId: {
        type: String,
        required: true,
    },
    vigencia: {
        type: String,
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

module.exports = mongoose.model('apartado', apartadoSchema);