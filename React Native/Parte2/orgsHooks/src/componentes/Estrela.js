import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrelaIcon from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  handleClick,
  desabilitada,
  preenchida,
  grande,
}) {
  const estilos = estilosFuncao(grande);

  const getImage = () => {
    if (preenchida) {
      return estrelaIcon;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={handleClick} disable={desabilitada}>
      <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
