import React from 'react';

import { Box, Button } from '../../styled/themes';
import { Items } from '../../item';
import { extratoLista } from '../../info';

const Extrato = () => {
  return (
    <Box>
       {
        extratoLista.updates.map(({id, type, from, value, date}) => {
            return (
                <Items key={id}>
                    <div>{type}</div>
                    <div>{from}</div>
                </Items>
            )
        })
       }
       <Button>Ver mais</Button>
    </Box>
  )
}

export default Extrato;