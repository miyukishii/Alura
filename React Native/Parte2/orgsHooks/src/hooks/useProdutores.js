import {useState, useEffect} from 'react';

import {carregaProdutores} from '../servicos/carregaDados';

export default function useProdutores() {
  const [title, setTitle] = useState('');
  const [produtores, setProdutores] = useState([]);

  useEffect(() => {
    const produtoresDados = carregaProdutores();
    setTitle(produtoresDados.titulo);
    setProdutores(produtoresDados.lista);
  }, []);

  return [title, produtores];
}
