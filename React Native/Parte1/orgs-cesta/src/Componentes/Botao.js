import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Botao({ texto, onPress }) {
  return <TouchableOpacity style={estilos.botao} onPress={onPress}>
    <Texto style={estilos.textoBotao}>
      {texto}
    </Texto>
  </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#2A9F85',
        marginTop: 16,
        width: 200,
        padding: 16,
        borderRadius: 6,
        justifyContent: 'center',
        
      },
      textoBotao: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
      }
})
