import react from 'react';
import { useRouter } from 'next/router';
import { Box, TextField, Button } from '@skynexui/components';
import nookies from 'nookies';

export default function LoginScreen() {
  const [senha, setSenha] = react.useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha) {
      nookies.set(null,'SENHA_SECRETA', 'senha', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/login',
      });
      router.push('/area-logada');
    } else {
      alert('Informe uma senha!');
    }
  }

  return(
    <Box
      styleSheet={{
        border: '1px solid #F9703E',
        marginTop: '20%',
        flexDirection: 'column',
        maxWidth: {xs: '100%', sm: '400px'},
        marginHorizontal: {xs: '16px', sm: 'auto'},
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
      }}
    >
      <form onSubmit={ handleSubmit }>

        <Box
          styleSheet={{ flexDirection: 'column' }}
        >
          <TextField
            label="Qual é a senha secreta?"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Box>

        <Button
          type="submit"
          label='Acessar' 
        />
      </form>
    </Box>
  )
}

// Utilizamos o Nookies, que salva informação no cookie, ideal ser token, para o servidor ter acesso.
