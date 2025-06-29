const express = require('express');
const app = express();
const sequelize = require('./src/database');
const logger = require('./src/middlewares/logger');
const routes = require('./src/routes');

// Middlewares globais
app.use(express.json());
app.use(logger); 

app.get('/', (req, res) => {
  res.send('API do Restaurante está funcionando!');
});

// Rotas principais
app.use(routes);

// Sincroniza modelos com o banco e cria tabelas se não existirem
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
    
    // Inicia o servidor
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000 🚀');
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });
