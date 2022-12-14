import React, {useMemo, useReducer, useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from './Estrelas';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaEmMetros = () => {
    return `${distancia}m`;
  };

  const distanciaString = useMemo(() => distanciaEmMetros(), [distancia]);

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
      <View style={estilos.info}>
        <Text style={estilos.nome}>{nome}</Text>
        <Estrelas
          estrela={estrelas}
          editavel={selecionado}
          grande={selecionado}
        />
      </View>
      <Text style={estilos.distancia}>{distanciaString}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    // Android
    elevation: 4,

    // iOS
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  info: {
    marginLeft: 8,
    flex: 1,
  },
  nome: {
    color: '#464646',
    fontWeight: 'bold',
  },
  distancia: {
    color: '#A3A3A3',
    fontSize: 12,
  },
});
