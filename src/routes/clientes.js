const express = require('express');
const router = express.Router();
const { clienteSchema } = require('../services/validacao');
const validar = require('../middlewares/validarRequisicao');
const clienteController = require('../controllers/clienteController');

router.post('/', validar(clienteSchema), clienteController.criarCliente);
router.get('/', clienteController.listarClientes);
router.put('/:id', validar(clienteSchema), clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;
