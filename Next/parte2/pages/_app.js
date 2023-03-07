import { Provider } from '@skynexui/components'

export default function MyApp({ Component, pageProps }) {
  return (
    // <>
    //   <style>{`
    //    * {
    //     font-family: sans-serif;
    //   }
    //   `}
    //   </style>
    //   <Component {...pageProps} />
    // </>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

// Este arquivo possibilita o compartilhamento de recursos entre páginas. Dese ser escrito dentro da pasta pages. É um componente React como default export.
