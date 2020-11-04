import { AsyncStorage } from 'react-native';
import api from './api';

export default async function apiRoutes() {}

// rotas GET do usuário
api.get('/api/Usuario/usuarios', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de Usuarios',
  });
});

api.get('/api/Usuario/:usuarioId', (req, res, next) => {
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
api.post('/api/Usuario/cadastrar', (req, res, next) => {
  res.status(200).send({});
});

api.post('/api/Usuario/autenticar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando post na rota de autenticaçao',
  });
});

//rotas PUT do usuário
api.put('/api/Usuario/atualizar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att usuario',
  });
});

api.put('/api/Usuario/endereco', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att endereço usuario',
  });
});

api.put('/api/Usuario/atualizar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de att usuario',
  });
});

api.put('/api/Usuario/trocasenha', async (req, res) => {
  let response = await user.findOne({
    where: { id: req.body.id, password: req.body.senhaAntiga },
  });
  if (response === null) {
    res.send(JSON.stringify('Senha atual não confere'));
  } else {
    if (req.body.novaSenha === req.body.confNovaSenha) {
      response.password = req.body.novaSenha;
      response.save();
      res.send(JSON.stringify('Senha atualizada com sucesso!'));
    } else {
      res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
    }
  }
});

api.put('/api/Usuario/configuracaobotao', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de config botao panico',
  });
});

//ROTAS PATCH do usuário
api.patch('/api/Usuario/deslogar/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de deslogar usuario',
  });
});

//rota DELETE do usuário
api.delete('/api/Usuario/remover/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de deletar usuario',
  });
});

//rotas de Bairro

api.get('/api/Bairro/:bairroId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de meu bairro',
  });
});

//ROTAS DE OCORRENCIA MENSAGEM
api.get('/api/OcorrenciaMensagem/bairro/:bairroId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar ocorrencias por  bairro',
  });
});

api.get('/api/OcorrenciaMensagem/mensagens/:usuarioId', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar mensagens do usuário',
  });
});

api.get('/api/OcorrenciaMensagem/:id', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar ocorrencia especifica',
  });
});

api.get('/api/OcorrenciaMensagem/mensagens/tipos', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de listar tipos de ocorrencia',
  });
});
//post ocorMensagem
api.post('/api/OcorrenciaMensagem/cadastrar', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando rota de cadastrar ocorrencia',
  });
});

module.exports = router;
