import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";

import Texto from "../../../Componentes/Texto";

export default function Item({ item: { nome, imagem } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{nome}</Texto>
  </View>
}

const estilos = StyleSheet.create({
    item: {
      flexDirection: 'row',
      paddingVertical: 16,
      marginHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ECECEC',
      alignItems: 'center',
    },
    nome: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
      color: '#464646',
    },
    imagem: {
      width: 50,
      height: 50,
    },
})