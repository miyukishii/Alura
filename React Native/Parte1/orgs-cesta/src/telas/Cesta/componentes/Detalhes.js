import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Botao from '../../../Componentes/Botao';
import Texto from '../../../Componentes/Texto';

function Detalhes({titulo, nomeFazenda, descricao, preco, logoFazenda, botao}) {
  return <>
      <Texto style={estilos.nome}>{titulo}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      
      <Botao texto={botao}/>
  </>
}

const estilos = StyleSheet.create({
      nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
      },
      fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
      },
      imagemFazenda: {
        width: 32,
        height: 32,
      },
      nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 8,
      },
      descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
      },
      preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
      },
})

export default Detalhes;