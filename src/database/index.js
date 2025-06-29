const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './restaurante.sqlite', // arquivo do banco SQLite na raiz do projeto
  logging: false, // desabilita logs SQL no console (opcional)
});

module.exports = sequelize;
