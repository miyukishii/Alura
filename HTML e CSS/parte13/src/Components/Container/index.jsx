import React from "react";

import { ContainerWrapper, Content } from '../../styled/container';
import { Title } from '../../styled/title';

import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = () => {
  return (
    <ContainerWrapper className="container">
      <Title>Olá Fulano!</Title>
      <Content className="conteudo">
        <Conta />
        <Extrato />
      </Content>
    </ContainerWrapper>
  );
};

export default Container;
