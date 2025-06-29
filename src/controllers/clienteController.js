const Cliente = require('../models/cliente');

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar cliente', detalhes: err.message });
  }
};

exports.listarClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.atualizarCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  await cliente.update(req.body);
  res.json(cliente);
};

exports.deletarCliente = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

  await cliente.destroy();
  res.json({ mensagem: 'Cliente removido com sucesso' });
};
