
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// rotas GET do usuário 
router.get('/api/Usuario/usuarios', (req, res, next) => {
 res.status(200).send({
   mensagem: 'Usando rota de Usuarios'
 });
});

router.get('/api/Usuario/:usuarioId', (req, res, next) =>{
 
  bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
    if (errBcrypt){ return res.status(500).send({ error: errBcrypt})
 
  });
  });
});

//rotas POST do usuário
router.post('/api/Usuario/cadastrar', (req, res, next) =>{
 res.status(200).send({
  
 });
});

router.post('/api/Usuario/autenticar', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando post na rota de autenticaçao'
 });
});

//rotas PUT do usuário
router.put('/api/Usuario/atualizar', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de att usuario'
 });
});

router.put('/api/Usuario/endereco', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de att endereço usuario'
 });
});

router.put('/api/Usuario/atualizar', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de att usuario'
 });
});

router.put('/api/Usuario/trocasenha', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de troca senha usuario'
 });
});

router.put('/api/Usuario/configuracaobotao', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de config botao panico'
 });
});

//ROTAS PATCH do usuário
router.patch('/api/Usuario/deslogar/:usuarioId', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de deslogar usuario'
 });
});

//rota DELETE do usuário
router.delete('/api/Usuario/remover/:usuarioId', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de deletar usuario'
 });
});

//rotas de Bairro

router.get('/api/Bairro/:bairroId', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de meu bairro'
 });
});

//ROTAS DE OCORRENCIA MENSAGEM
router.get('/api/OcorrenciaMensagem/bairro/:bairroId', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de listar ocorrencias por  bairro'
 });
});

router.get('/api/OcorrenciaMensagem/mensagens/:usuarioId', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de listar mensagens do usuário'
 });
});

router.get('/api/OcorrenciaMensagem/:id', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de listar ocorrencia especifica'
 });
});

router.get('/api/OcorrenciaMensagem/mensagens/tipos', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de listar tipos de ocorrencia'
 });
});
//post ocorMensagem
router.post('/api/OcorrenciaMensagem/cadastrar', (req, res, next) =>{
 res.status(200).send({
  mensagem: 'Usando rota de cadastrar ocorrencia'
 });
});





module.exports = router;