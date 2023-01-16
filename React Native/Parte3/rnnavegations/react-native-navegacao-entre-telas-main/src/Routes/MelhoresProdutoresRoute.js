import React from 'react';

import ProdutorRoute from './ProdutorRoute';
import MelhoresProdutores from '../telas/Home/MelhoresProdutores';

export default function MelhoresProdutoresRoute() {
  return <ProdutorRoute componentePrincipal={MelhoresProdutores} />;
}
