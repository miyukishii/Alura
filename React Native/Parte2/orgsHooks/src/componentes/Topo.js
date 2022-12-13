import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import {carregaTopo} from '../servicos/carregaDados';
import logo from '../assets/logo-orgs.png';

export default class Topo extends React.Component {
  state = {
    topo: {},
  };

  componentDidMount() {
    this.atualizaTopo();
  }

  atualizaTopo() {
    const topo = carregaTopo();
    this.setState({
      topo,
    });
  }

  render() {
    const {topo} = this.state;
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.logo} />
        <Text style={estilos.title}>{topo.title}</Text>
        <Text style={estilos.subtitle}>Encontre os melhores produtores</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logo: {
    width: 70,
    height: 28,
  },
  title: {
    marginTop: 24,
    fontWeight: 'bold',
    lineHeight: 42,
    fontSize: 42,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});
