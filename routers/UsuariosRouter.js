const express = require('express');

const router = express.Router();

const UsuariosController = require('../controllers/UsuariosControllers');

router.get('/registrar', UsuariosController.renderCriarUsuario);

module.exports = router;