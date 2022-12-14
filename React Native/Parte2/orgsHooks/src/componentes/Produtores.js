import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import useProdutores from '../hooks/useProdutores';

import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [title, produtores] = useProdutores();
  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={produtores}
      ListHeaderComponent={TopoLista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Produtor {...item} />}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
