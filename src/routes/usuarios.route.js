const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', usuariosController.index);
router.get('/:id', authMiddleware.verificarJWT, usuariosController.getById);
router.post('/', usuariosController.create);
router.delete('/:id', authMiddleware.verificarJWT, usuariosController.delete);
router.patch('/:id', authMiddleware.verificarJWT, usuariosController.updateParcial);
router.put('/:id', authMiddleware.verificarJWT, usuariosController.updateCompleto);
// router.put('/:id/imagen-perfil', usuariosController.updateImagenPerfil);

module.exports = router;