const calzadoModel = require("../models/calzado.model");


// /calzado?page=1&limit=2
const index = async (req, res) => {
    try {
        const {page, limit} = req.query;
        const skip = (page - 1) * limit;

        const calzado = req.calzado;
        
        const calzados = await calzadoModel.find({deleted: false}).skip(skip).limit(limit);

        let response = {
            message: "se obtuvieron los calzados correctamente",
            data: calzados
        }

        if (page && limit) {
            const totalcalzados = await calzadoModel.countDocuments({deleted: false});
            const totalPages =  Math.ceil(totalcalzados / limit);
            const currentPage = parseInt(page);

            response = {
                ...response,
                total: totalcalzados,
                totalPages,
                currentPage,
            }
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al obtener los calzados",
            error: error.message
        });
    }
};


const create = async (req, res) => {
    try {
        let calzado = new calzadoModel({
            precio: req.body.precio,
            talla: req.body.talla,
            modelo: req.body.modelo,
            genero: req.body.genero,
            color: req.body.color,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            inventario: req.body.inventario

        });
    
        await calzado.save();
    
        return res.status(201).json({
            message: "calzado creado exitosamente!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "falló al crear el calzado!",
            error: error.message
        });
    }
};


const deleteLogico = async (req, res) => {
    try {
        const calzadoId = req.params.id;
        const calzadoEliminado = await calzadoModel.findByIdAndUpdate(calzadoId, {deleted: true, deleted_at: new Date()});

        if (!calzadoEliminado) {
            return res.status(404).json({
                message: "calzado no encontrado"
            })
        }

        return res.status(200).json({
            message: "calzado eliminado exitosamente"
        })

    } catch (error) {
        return res.status(500).send({
            message: "ocurrió un error al eliminar el calzado",
            error: error.message
        })
    }
};


// /usuarios/:id
const updateParcial = async (req, res) => {
    try {
        const calzadoId = req.params.id;
        const datosActualizar = {
            ...req.body,
            updated_at: new Date()
        }

        const calzadoActualizado = await calzadoModel.findByIdAndUpdate(calzadoId, datosActualizar);
        
        if (!calzadoActualizado) {
            return res.status(404).json({
                message: "calzado no encontrado"
            });
        }

        return res.status(200).json({
            message: "calzado actualizado exitosamente"
        })
        

    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al editar el calzado",
            error: error.message
        });
    }
}



module.exports = {
    index,
    create,
    deleteLogico,
    updateParcial,
} 
