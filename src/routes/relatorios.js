const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/pratos-mais-pedidos', relatorioController.pratosMaisPedidos);
router.get('/clientes-mais-pedidos', relatorioController.clientesMaisPedidos);
router.get('/clientes-mais-gastaram', relatorioController.clientesMaisGastaram);

module.exports = router;
