import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Header, Logo, BtnHeader } from "../../styled/header";

const Cabecalho = () => {
  return (
    <Header>
      <Logo className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary className="btn-secundario" href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader className="btn-primario" href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </Header>
  );
};

export default Cabecalho;
