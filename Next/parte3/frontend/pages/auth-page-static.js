import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { authService } from "../src/services/auth/authService";

function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService.getSession()
    .then((response) => {
      setSession(response);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return {
    session,
    loading,
    error
  }
}

export default function AuthPageStatic(props) {
  const router = useRouter();
  const session = useSession();

  if (!session.data && !session.loading) {
    console.log('redirectiona o usuário para home');
    router.push('/?error=401')
  }
  return (
    <div>
        <h1>Auth Page Static</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}