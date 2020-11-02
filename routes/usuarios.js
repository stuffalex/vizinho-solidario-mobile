const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// rotas GET do usuário
router.get('/api/Usuario/usuarios', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de Usuarios',
  });
});

router.get('/api/Usuario/:usuarioId', (req, res, next) => {
  //conect
  if (error) return res.status(500).send({ error: error }); //fecha o get conection
  //hash da senha com salt
  bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
    if (errBcrypt) {
      return res.status(500).send({ error: errBcrypt });
    }
    // conexao com inserçao de dados
  });
});

//rotas POST do usuário
router.post('/api/Usuario/cadastrar', (req, res, next) => {
  res.status(200).send({});
});

router.post('/api/Usuario/autenticar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando post na rota de autenticaçao',
  });
});

//rotas PUT do usuário
router.put('/api/Usuario/atualizar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att usuario',
  });
});

router.put('/api/Usuario/endereco', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att endereço usuario',
  });
});

router.put('/api/Usuario/atualizar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att usuario',
  });
});

router.put('/api/Usuario/trocasenha', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de troca senha usuario',
  });
});

router.put('/api/Usuario/configuracaobotao', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de config botao panico',
  });
});

//ROTAS PATCH do usuário
router.patch('/api/Usuario/deslogar/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de deslogar usuario',
  });
});

//rota DELETE do usuário
router.delete('/api/Usuario/remover/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de deletar usuario',
  });
});

module.exports = router;
