import React, { Component } from 'react';

export default function TipoOcorrencia() {
  return (
    <div>
      <DropdownButton
        id='dropdown-basic-button'
        title='Srlrcione o tipo de oorrência'
      >
        <Dropdown.Item
          onPress={() =>
            navigation.navigate('ocorrencia', { name: 'Ocorrencia' })
          }
        >
          Ocorrência
        </Dropdown.Item>
        <Dropdown.Item
          onPress={() =>
            navigation.navigaste('mensagemDireta', {
              name: 'Mensagem Direta',
            })
          }
        >
          Mensagem Direta
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
