import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';

function Cesta() {
  return <SafeAreaView>
    <Topo />

    <View style={estilos.cesta}>
      <Detalhes />
    </View>
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
})

export default Cesta;