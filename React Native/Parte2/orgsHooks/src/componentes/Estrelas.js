import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Estrela from './Estrela';

export default function Estrelas({estrela, editavel, grande}) {
  const [quantidade, setQuantidade] = useState(estrela);

  const handleClick = index => {
    setQuantidade(index + 1);
  };

  const RenderEstrelas = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <Estrela
          handleClick={() => handleClick(i)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
          key={i}
        />,
      );
    }
    return list;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
