import nookies from 'nookies';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const ONE_YEAR = 60 * 60 * 24 * 365;

export const tokenService = {
    save(accessToken, ctx = null) {
    //   persiste mais tempo na memória da máquina e mesmo após fechar página
      globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    //   A informação salva é perdida após fechar página;
    //   sessionStorage.setItem(ACCESS_TOKEN_KEY);
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken,  {
        maxAge: ONE_YEAR,
        path: '/'
    });
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx);
        // return globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
        return cookies[ACCESS_TOKEN_KEY] || '';
    },
    delete() {
        globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
    }
}