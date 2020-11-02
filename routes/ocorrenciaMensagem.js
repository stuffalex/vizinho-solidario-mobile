const express = require('express');
const router = express.Router();
//rotas de Bairro

router.get('/api/Bairro/:bairroId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de meu bairro',
  });
});

//ROTAS DE OCORRENCIA MENSAGEM
router.get('/api/OcorrenciaMensagem/bairro/:bairroId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar ocorrencias por  bairro',
  });
});

router.get('/api/OcorrenciaMensagem/mensagens/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar mensagens do usuário',
  });
});

router.get('/api/OcorrenciaMensagem/:id', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar ocorrencia especifica',
  });
});

router.get('/api/OcorrenciaMensagem/mensagens/tipos', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar tipos de ocorrencia',
  });
});
//post ocorMensagem
router.post('/api/OcorrenciaMensagem/cadastrar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de cadastrar ocorrencia',
  });
});

module.exports = router;
