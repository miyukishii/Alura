import { Box, Text, Button } from '@skynexui/components';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  // Basicamente queremos saber se o usuário está autorizado.
  const SENHA_SECRETA = '123456';
  const senha_informada = cookies.SENHA_SECRETA
  const isAuthorized = SENHA_SECRETA === senha_informada;

  if (!isAuthorized) {
    console.log('Não autorizado!');
    return {
      redirect: {
        permanent: false,
        destination: '/login?status=401'
      }
    }
  }
  console.log('Autorizado!');
  return {
    props: {}
  }
}

export default function LoggedScreen() {
  const router = useRouter();
  return(
    <Box
      styleSheet={{
        border: '1px solid #F9703E',
        flexDirection: 'column',
        maxWidth: '400px',
        marginTop: '20%',
        marginHorizontal: 'auto',
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
      }}
    >
      <Text styleSheet={{ marginVertical: '32px' }}>
        Você acessou uma área protegida!
      </Text>

      <Button
        label='Logout'
        onClick={() => {
          nookies.destroy(null, 'SENHA_SECRETA');
          router.push('/login')
        }}
        colorVariant = 'neutral'
        variant = 'secondary'
      />
    </Box>
  )
}
