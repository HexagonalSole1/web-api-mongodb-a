const apartadoModel = require("../models/apartado.model");

// Controlador para obtener una lista de apartados
const index = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;

        const apartados = await apartadoModel.find({ deleted: false }).skip(skip).limit(limit);

        let response = {
            message: "Se obtuvieron los apartados correctamente",
            data: apartados
        }

        if (page && limit) {
            const totalApartados = await apartadoModel.countDocuments({ deleted: false });
            const totalPages = Math.ceil(totalApartados / limit);
            const currentPage = parseInt(page);

            response = {
                ...response,
                total: totalApartados,
                totalPages,
                currentPage,
            }
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener los apartados",
            error: error.message
        });
    }
};

// Controlador para crear un apartado con vigencia 3 días después de la creación
const create = async (req, res) => {
    try {
        // Obtén la fecha actual
        const fechaActual = new Date();

        // Calcula la fecha de vigencia sumando 3 días a la fecha actual
        const vigencia = new Date(fechaActual);
        vigencia.setDate(vigencia.getDate() + 3);

        let apartado = new apartadoModel({
            fecha: fechaActual,
            clienteId: req.body.clienteId,
            vigencia: vigencia
        });

        await apartado.save();

        return res.status(201).json({
            message: "Apartado creado exitosamente!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Falló al crear el apartado.",
            error: error.message
        });
    }
};


// Controlador para realizar un borrado lógico de un apartado
const deleteLogico = async (req, res) => {
    try {
        const apartadoId = req.params.id;
        const apartadoEliminado = await apartadoModel.findByIdAndUpdate(apartadoId, { deleted: true, deleted_at: new Date() });

        if (!apartadoEliminado) {
            return res.status(404).json({
                message: "Apartado no encontrado"
            });
        }

        return res.status(200).json({
            message: "Apartado eliminado exitosamente"
        });

    } catch (error) {
        return res.status(500).send({
            message: "Ocurrió un error al eliminar el apartado",
            error: error.message
        });
    }
};

// Controlador para realizar una actualización parcial de un apartado
const updateParcial = async (req, res) => {
    try {
        const apartadoId = req.params.id;
        const datosActualizar = {
            ...req.body,
            updated_at: new Date()
        }

        const apartadoActualizado = await apartadoModel.findByIdAndUpdate(apartadoId, datosActualizar);

        if (!apartadoActualizado) {
            return res.status(404).json({
                message: "Apartado no encontrado"
            });
        }

        return res.status(200).json({
            message: "Apartado actualizado exitosamente"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al editar el apartado",
            error: error.message
        });
    }
};

module.exports = {
    index,
    create,
    deleteLogico,
    updateParcial
}
