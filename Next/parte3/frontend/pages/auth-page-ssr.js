// import nookies from 'nookies';
import { authService } from '../src/services/auth/authService';

export default function AuthPageSSR(props) {
    return (
      <div>
          <h1>Auth Page Side Render</h1>
          <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    )
}

// Padrão decorator
// function withSession(functin) {
//   return () => {
//     props: {
//       bla: 'oi'
//     }
//   }
// }

// export const getServerSideProps = withSession((ctx) => {
//   return {
//     props: {
//       session:ctx.session,
//     }
//   }
// })

export async function getServerSideProps(ctx) {
  try {
    const session = await authService.getSession(ctx);
    return {
      props: {
        session,
      }
    }
  } catch(err) {
    return {
      redirect: {
        permanent: false,
        destination: '/?error=401'
      }
    }
  }
}